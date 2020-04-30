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
  public filterPost: any
  searchTerm: string = "";

  constructor(
    private router: Router,
    public itemService: ItemService,
    public events: Events,
  ) { 
  }

  async ngOnInit() {
    var self = this;
    self.posts = await self.itemService.getPosts('original-post');
    self.filterPost = self.posts;
  }

  setFilteredPosts() {
    console.log("filtering: " + this.searchTerm);

    if (this.searchTerm == "") {
      this.filterPost = this.posts;
    }

    this.filterPost = this.posts.filter(post => {
      return post.title.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1;
    });
  }

  getTitle(title) {
    return (title.length > 15) ? title.substring(0,15)+"..." : title;
  }

  goToItem(post){
    console.log("displaying item info");
    console.log(post);
    this.router.navigate(["./product-detail",post]);
  }

}