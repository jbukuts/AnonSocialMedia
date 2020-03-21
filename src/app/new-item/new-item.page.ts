import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';


import { ItemService } from '../item.service';

@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.page.html',
  styleUrls: ['./new-item.page.scss'],
})
export class NewItemPage implements OnInit {

  new_post_form: FormGroup;
  public regex = "^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$";

  constructor(
    private router: Router,
    public formBuilder: FormBuilder,
    public itemService: ItemService,
    public toastController: ToastController
  ) { }

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
    this.new_post_form = this.formBuilder.group({
      title: new FormControl('',Validators.required),
      text: new FormControl('',Validators.required),
      img: new FormControl('',Validators.required),
    });
  }

  // upon creation of new item
  createPost(value) {
    // log for debug
    console.log(value);
    // add item through use of service module and reset form
    this.itemService.createPost(value.title,value.text,value.img);
    this.new_post_form.reset();
    this.presentToast()

    // return to home page
    this.goBack();
  }

  // return to the home page
  goBack() {
    this.router.navigate(['./home']);
  }

}
