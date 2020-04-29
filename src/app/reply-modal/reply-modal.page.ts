import { Component, OnInit, Input } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { Validators, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ItemService } from '../item.service';
import * as firebase from 'firebase';
import { Events } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { File } from '@ionic-native/file/ngx';
import { v1 as uuidv1 } from 'uuid';
import { ActionSheetController } from '@ionic/angular';


@Component({
  selector: 'app-reply-modal',
  templateUrl: './reply-modal.page.html',
  styleUrls: ['./reply-modal.page.scss'],
})
export class ReplyModalPage implements OnInit {

  private modalCtrl;
  new_reply_form: FormGroup;

  imgFile;

  @Input() replyTo: string;
  @Input() text: string;
  @Input() originalPost: string;

  constructor(
    public modalController: ModalController,
    navParams: NavParams,
    public formBuilder: FormBuilder,
    public itemService: ItemService,
    public events: Events,
    private camera: Camera,
    public actionSheet : ActionSheetController,
    private file : File,
  ) 
  { 
    console.log(navParams.get('replyTo'));
    this.modalCtrl = modalController;
  }

  ngOnInit() {
    this.new_reply_form = this.formBuilder.group({
      text: new FormControl('',Validators.required)
    });
  }

  // pops up the action sheet
  async selectImage() {
    const actionSheet = await this.actionSheet.create({
      header : "Select Image Source",
      buttons: [{
        text : 'Load From Library',
        handler: () => {
          this.pickImage(this.camera.PictureSourceType.PHOTOLIBRARY);
        }
      },
      {
        text : 'Use Camera',
        handler : () => {
          this.pickImage(this.camera.PictureSourceType.CAMERA);
        }
      },
      {
        text : 'Cancel',
        role : 'cancel'
      }
    ]
    });
    await actionSheet.present();
  }

  pickImage(sourceType) {
    const options: CameraOptions = {
      quality: 100,
      sourceType: sourceType,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      this.imgFile = base64Image;
    }, (err) => {
      console.log(err);
    });

  }

  // called when the button is clicked
  private async createReply(reply) {
    console.log(reply);
    // this will present a toast
    await this.itemService.presentToast("Reply Created!");

    var self = this;
    let object = {
      text : reply.text,
      replyTo : this.replyTo,
      timestamp : Date.now()
    };

    // check if we need to upload an image
    if (this.imgFile != null) {
      // upload the actual image to firebase 
      const pictures = firebase.storage().ref('pictures/'+uuidv1());
      let uploadTask = await pictures.putString(this.imgFile,'data_url');

      await pictures.getDownloadURL().then(function(downloadURL) {
        console.log('FILE AVAILABLE AT ',downloadURL);
        object['img'] =  downloadURL;
      }); 
    }


    // add to db
    var db = firebase.firestore();
    db.collection('original-post/'+this.originalPost+'/replies').add(object)
    .then(function(docRef) {
      console.log("Document written with ID",docRef.id);
      // TODO: add replies to your post!
    })
    .catch(function(error){
      console.error("Error adding document: ",error);
    });

    // clear the form and dismiss the modal
    await this.dismiss();
    this.new_reply_form.reset();
    this.events.publish('replychange',Date.now());
  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }

}
