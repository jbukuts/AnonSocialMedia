import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-your-posts',
  templateUrl: './your-posts.page.html',
  styleUrls: ['./your-posts.page.scss'],
})
export class YourPostsPage implements OnInit {

  yourPosts;

  constructor(
    public itemService: ItemService,
    private router: Router
  ) {
    var self = this;
    self.yourPosts = self.itemService.getYourPosts();
   }

   goToItem(post){
    console.log("Goinf to your post");
    console.log(post);
    this.router.navigate(["./product-detail",post]);
  }

  ngOnInit() {
  }

}
