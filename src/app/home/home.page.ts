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
  posts;

  constructor(
    private router: Router,
    public itemService: ItemService,
    public events: Events,
    public toastController: ToastController
  ) {
    var self=this;
    events.subscribe('dataloaded', (time) => {
      self.posts = self.itemService.getPosts('original-post');
    });
    console.log(self.posts);
  }

  ngOnInit() {
    var self = this;
    self.posts = self.itemService.getPosts('original-post');
  }

  getTitle(title) {
    return (title.length > 15) ? title.substring(0,15)+"..." : title;
  }

  // go to the new item page
  directNewPost(){
    console.log("clicked new item");
    let board = {'board' : 'original-post'};
    this.router.navigate(["/new-item",board]);
  }

  goToItem(post){
    post['board'] = 'original-post';
    console.log("displaying item info");
    console.log(post);
    this.router.navigate(["./product-detail",post]);
  } 
}
