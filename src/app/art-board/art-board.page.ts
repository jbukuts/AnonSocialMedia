import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Events } from '@ionic/angular';
import { ItemService } from '../item.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-art-board',
  templateUrl: './art-board.page.html',
  styleUrls: ['./art-board.page.scss'],
})
export class ArtBoardPage implements OnInit {

  // products for the product store
  posts;
  board = 'original-post';

  constructor(
    private router: Router,
    public itemService: ItemService,
    public events: Events,
    public toastController: ToastController
  ) {
    var self=this;
    events.subscribe('dataloaded', (time) => {
      self.posts = self.itemService.getPosts(this.board);
    });
    console.log(self.posts);
  }

  ngOnInit() {
    var self = this;
    self.posts = self.itemService.getPosts(this.board);
  }

  getTitle(title) {
    return (title.length > 15) ? title.substring(0,15)+"..." : title;
  }

  // go to the new item page
  directNewPost(){
    console.log("clicked new item");
    let board = {'board' : this.board};
    this.router.navigate(["/new-item",board]);
  }

  goToItem(post){
    post['board'] = this.board;
    console.log("displaying item info");
    console.log(post);
    this.router.navigate(["./product-detail",post]);
  } 

}
