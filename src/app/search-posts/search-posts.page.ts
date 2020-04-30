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

  private boards = ['original-post','art-post','media-post'];

  public posts: Array<any>;
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
    self.posts = new Array();
    let db = firebase.firestore();

    // get all post from all boards
    for (let b of self.boards) {
      db.collection(b).get().then( function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
          var item = doc.data();
          
          self.posts.push({
            text : item.text,
            title : item.title,
            timestamp: item.timestamp,
            docId : doc.ref.id,
            board : b
          });
  
          // check to see if item has image
          if (item.img != null) {
            self.posts[self.posts.length-1]['img'] = item.img;
          }
        }
      )});
    }

    console.log(self.posts);
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