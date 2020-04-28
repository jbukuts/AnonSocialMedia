import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Events } from '@ionic/angular';
import { ItemService } from '../item.service';
import { ToastController } from '@ionic/angular';
import * as firebase from 'firebase';

@Component({
  selector: 'app-search-posts',
  templateUrl: './search-posts.page.html',
  styleUrls: ['./search-posts.page.scss'],
})
export class SearchPostsPage implements OnInit {

  public posts: any;
  searchTerm: string = "";

  constructor(
    private router: Router,
    public itemService: ItemService,
    public events: Events,
  ) { 
    var self=this;
    events.subscribe('dataloaded', (time) => {
      self.posts = [];
      self.posts = self.itemService.posts;
      // user and time are the same arguments passed in `events.publish(user, time)`
      console.log('data reloading  time:', time);
      console.log(self.posts);
    });
    self.itemService.getPosts();
  }

  ngOnInit() {
    this.setFilteredPosts();
  }

  setFilteredPosts() {
    this.posts = this.itemService.filterPosts(this.searchTerm);
  }

  goToItem(post){
    console.log("displaying item info");
    console.log(post);
    this.router.navigate(["./product-detail",post]);
  }

}
