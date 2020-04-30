import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController, ActionSheetController, NavController } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { File } from '@ionic-native/file/ngx';
import { v1 as uuidv1 } from 'uuid';
import * as firebase from 'firebase';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { ItemService } from '../item.service';

@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.page.html',
  styleUrls: ['./new-item.page.scss'],
})
export class NewItemPage implements OnInit {

  imgFile;
  board;

  
  new_post_form: FormGroup;
  public regex = "^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$";

  constructor(
    private router: Router,
    public formBuilder: FormBuilder,
    public itemService: ItemService,
    public toastController: ToastController,
    private camera: Camera,
    public actionSheet : ActionSheetController,
    private file : File,
    private route : ActivatedRoute,
    private location : Location,
    private navController : NavController

  ) { }

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

  // displays message telling user that new item was added
  async presentToast() {
    const toast = await this.toastController.create({
      color: 'dark',
      message: 'Post has been created!',
      duration: 2000,
      showCloseButton: true
    });
    toast.present();
  }

  ngOnInit() {

    // we need to get the board to post the thread to
    this.route.params.subscribe(
      async param => {
        this.board = param.board;
        console.log(this.board);
      }
    );

    this.new_post_form = this.formBuilder.group({
      title: new FormControl('',Validators.required),
      text: new FormControl('',Validators.required),
    });
  }

  // upon creation of new item
  async createPost(value) {
    // log for debug
    console.log(value);
    // add item through use of service module and reset form
    

    console.log(this.imgFile);


    if (this.imgFile == null) {
      this.itemService.createPostNoImage(value.title, value.text, this.board);
      this.new_post_form.reset();
      this.presentToast();
      this.navController.setDirection("back", true, "back");
      this.location.back();
      return;
    }

    let imgUrl;
    // upload the actual image to firebase 
    const pictures = firebase.storage().ref('pictures/'+uuidv1());
    let uploadTask = await pictures.putString(this.imgFile,'data_url');

    await pictures.getDownloadURL().then(function(downloadURL) {
      console.log('FILE AVAILABLE AT ',downloadURL);
      imgUrl = downloadURL;
    }); 

    this.itemService.createPost(value.title,value.text,imgUrl, this.board);
    this.new_post_form.reset();
    this.presentToast();

    // return to last page
    this.navController.setDirection("back", true, "back");
    this.location.back();
  }
}
