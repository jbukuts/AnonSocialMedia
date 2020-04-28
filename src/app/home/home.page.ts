import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Events } from '@ionic/angular';
import { ItemService } from '../item.service';
import { ToastController } from '@ionic/angular';
import * as firebase from 'firebase';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  // products for the product store
  items;

  constructor(
    private router: Router,
    public itemService: ItemService,
    public events: Events,
    public toastController: ToastController
  ) {
    var self=this;
    events.subscribe('dataloaded', (time) => {
      self.items = [];
      self.items = self.itemService.posts;
      // user and time are the same arguments passed in `events.publish(user, time)`
      console.log('data reloading  time:', time);
      console.log(self.items);
    });
    self.itemService.getPosts();

  
    console.log(firebase.auth().currentUser);
    if (firebase.auth().currentUser ==  null) {
        console.log("user not logged in");
        return;
    }    
    console.log(self.items);
  }

  ngOnInit() {
    var self = this;
  }

  getTitle(title) {
    return (title.length > 15) ? title.substring(0,15)+"..." : title;
  }

  // go to the new item page
  directNewPost(){
    console.log("clicked new item");
    this.router.navigate(["/new-item"]);
  }

  goToItem(post){
    console.log("displaying item info");
    console.log(post);
    this.router.navigate(["./product-detail",post]);
  }

  // displays message telling user that new item was added
  async presentToast(message) {
    const toast = await this.toastController.create({
      color: 'dark',
      message: message,
      duration: 2000,
      showCloseButton: true
    });
    toast.present();
  }
  
}
