import { Component, OnInit, Input } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { Validators, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ItemService } from '../item.service';
import * as firebase from 'firebase';
import { Events } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/Camera/ngx';
import { v1 as uuidv1 } from 'uuid';
import { File } from '@ionic-native/file/ngx';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';



@Component({
  selector: 'app-reply-modal',
  templateUrl: './reply-modal.page.html',
  styleUrls: ['./reply-modal.page.scss'],
}) 
export class ReplyModalPage implements OnInit {
  imgFile = "/assets/placeholder.png";
  public regex = "^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$";
  private modalCtrl;
  new_reply_form: FormGroup;

  @Input() replyTo: string;
  @Input() text: string;

  constructor(
    public modalController: ModalController,
    navParams: NavParams,
    public formBuilder: FormBuilder,
    public itemService: ItemService,
    public events: Events,
    public camera : Camera,
    public file: File
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

  // called when the button is clicked
  private createReply(reply) {
    console.log(reply);
    // this will present a toast
    this.itemService.presentToast("Reply Created!");

    var self = this;

    // add to db
    var db = firebase.firestore();
    db.collection("reply-post").add({
      text : reply.text,
      postId : this.replyTo
    })
    .then(function(docRef) {
      console.log("Document written with ID",docRef.id);
      // TODO: add replies to your post!
    })
    .catch(function(error){
      console.error("Error adding document: ",error);
    });

    // clear the form and dismiss the modal
    this.dismiss();
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

  browseImg(){
console.log("Button pressed");
  }
  takeImg(){
console.log("other button has been pressed");
  }
  async takePicture() {
    const options: CameraOptions = {
      quality : 40,
      targetHeight : 600,
      targetWidth : 600,
      destinationType : this.camera.DestinationType.DATA_URL,
      encodingType : this.camera.EncodingType.JPEG,
      mediaType : this.camera.MediaType.PICTURE,
      correctOrientation : true
    };

    console.log("TRYING!");
    var self = this;

    try {
      const result = await this.camera.getPicture(options);
      const image = 'data:image/jpeg;base64,'+result;
      console.log(image);
      const pictures = firebase.storage().ref('pictures/'+uuidv1());
      let uploadTask = await pictures.putString(image,'data_url');

      pictures.getDownloadURL().then(function(downloadURL) {
        console.log('FILE AVAILABLE AT ',downloadURL);
        self.imgFile = downloadURL;

      });      
    } catch (e) {
      console.log(e.message);
      alert("ERROR!");
    }  
  }

}
