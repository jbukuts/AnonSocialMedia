import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemService } from '../item.service';
import * as firebase from 'firebase';
import { AlertController } from '@ionic/angular';
import { Events } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { ReplyModalPage } from '../reply-modal/reply-modal.page';
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

  // this will get the post 
  async getReplys(postId) {
    let replys = [];
    let self = this;
    self.presentLoading();
    console.log("GETTING REPLYS FOR "+postId+"!");
    replys = await self.recSearchPost(postId,replys);
    console.log(replys);
    self.dismissLoading();
    return replys;
  }

  async recSearchPost(postId : any,postArray : any) {
    let self = this;
    let replyList = await this.getList(postId);
    
    // the current post has no replies return
    if (replyList.length == 0)
      return postArray;
    else {
      // add new post found to current list
      postArray = postArray.concat(replyList);

      // iterate over new post looking for replies
      for (let r of replyList) {
        console.log("LOOKING FOR REPLIES TO "+r.docId+"!")
        postArray = await self.recSearchPost(r.docId,postArray);
      }
    }

    return postArray;
  }

  // get list from database with matching replyTo 
  async getList(postId) {
    let db = firebase.firestore();
    let q = db.collection('reply-post').where("postId","==",postId);
    let ret:Array<any>=new Array();

    // find replys to the original post
    await q.get().then( function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
        var item = doc.data();
        console.log(doc.data());
        console.log(doc.ref.id);

        // add item to the database
        ret.push({
          text : item.text,
          replyTo : item.postId,
          docId : doc.ref.id
        });
      });
    });
    return ret;
  }

  createReply(postId) {
    console.log("CREATING REPLY TO POST "+postId+"!");
    this.presentModal(postId);
  }

  // shows the modal for the user to input text and create reply
  async presentModal(post) {
    const modal = await this.modalController.create({
      component: ReplyModalPage,
      componentProps: {
        'replyTo': post.docId,
        'text' : post.text
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

