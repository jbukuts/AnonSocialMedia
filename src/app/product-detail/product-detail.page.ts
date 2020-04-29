import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemService } from '../item.service';
import * as firebase from 'firebase';
import { AlertController } from '@ionic/angular';
import { Events } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { ReplyModalPage } from '../reply-modal/reply-modal.page';
import { ShowReplyModalPage } from '../show-reply-modal/show-reply-modal.page';
import { ImageModalPage } from '../image-modal/image-modal.page';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss'],
})


export class ProductDetailPage implements OnInit {

  constructor(
    private route: ActivatedRoute,
    public itemService: ItemService,
    public alertController: AlertController,
    public events: Events,
    public modalController: ModalController,
    public loadingController: LoadingController
  ) {
    var self=this;
    events.subscribe('replychange', async (time) => {
      self.post_replys = await self.getReplys(self.current_post.docId);
      // user and time are the same arguments passed in `events.publish(user, time)`
      console.log('data reloading  time:', time);
      console.log(self.post_replys);
    });
  }

  // this will show loading bar
  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Loading Replies...',
      keyboardClose : true,
      spinner : "circular"
    });
    await loading.present();
  }

  // will the dismiss the loading bar upon replies being loaded
  dismissLoading() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.loadingController.dismiss({
      'dismissed': true
    });
  }

  // this represent the item to be displayed
  // in json form
  current_post;
  post_replys = [];

  // on init will get the item passed
  ngOnInit() {
    this.route.params.subscribe(
      async param => {
        this.current_post = param;
        console.log(this.current_post);
        this.post_replys = await this.getReplys(this.current_post.docId);
        console.log(this.post_replys);
      }
    );
  }

  // return string of date from timestamp input
  private getDate(d) {
    var date = new Date(parseInt(d));
    return (date.getMonth()+1)+ "/" + date.getDate() + "/" +date.getFullYear() +" "+date.getHours()+":"+("0"+date.getMinutes()).slice(-2)+":"+("0"+date.getSeconds()).slice(-2);
  }

  // this will get the post 
  async getReplys(postId) {
    let replys = [];
    let self = this;
    await self.presentLoading();
    console.log("GETTING REPLYS FOR "+postId+"!");
    replys = await this.itemService.getReplies(postId);
    await self.dismissLoading();
    return replys;
  }

  createReply(postId) {
    console.log("CREATING REPLY TO POST "+postId+"!");
    this.presentReplyModal(postId);
  }

  showPost(postId) {
    console.log("showing post "+postId.replyTo);
    var self = this;

    let p;
    if (this.current_post.docId == postId.replyTo) {
      p = this.current_post;
    }
    else {   
      for (var i=0; i<self.post_replys.length;i++) {
        console.log(self.post_replys[i].docId );
        if (self.post_replys[i].docId == postId.replyTo) {
          p = self.post_replys[i];
          break;
        }
      }
    }

    console.log(p);
    this.presentShowReplyModal(p);
  }

  // shows the modal for the user to input text and create reply
  async presentShowReplyModal(post) {
    const modal = await this.modalController.create({
      component: ShowReplyModalPage,
      componentProps: {
        'post' : post
      },
      backdropDismiss : true
    });
    
    // present the modal
    await modal.present();

    // wait for the modal to dismiss to reload data
    await modal.onWillDismiss();
  }

  // shows the modal for the user to input text and create reply
  async presentReplyModal(post) {
    const modal = await this.modalController.create({
      component: ReplyModalPage,
      componentProps: {
        'replyTo': post.docId,
        'text' : post.text,
        'originalPost' : this.current_post.docId
      }
    });
    
    // present the modal
    await modal.present();

    // wait for the modal to dismiss to reload data
    await modal.onWillDismiss();
  }

  // shows the modal for the user to input text and create reply
  async expandImg(img) {
    console.log("Expanding Image!");

    const modal = await this.modalController.create({
      component: ImageModalPage,
      componentProps: {
        'img': img
      },
      backdropDismiss : true
    });
    
    // present the modal
    document.getElementById("content").style.filter = "blur(5px)";
    document.getElementById("header").style.filter = "blur(5px)";
    await modal.present();

    
    // wait for the modal to dismiss to reload data
    await modal.onWillDismiss();
    document.getElementById("content").style.filter = "blur(0px)";
    document.getElementById("header").style.filter = "blur(0px)";
  }

}

