import { Injectable } from '@angular/core';
import { Events } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import * as firebase from 'firebase';
import { ToastController } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})

export class ItemService {
  public darkMode: boolean;
  public themeValue: string;

  ref = firebase.database().ref('original-post/');

  constructor(public events: Events, public toastController: ToastController) {}

  // this will represent the post you have made
  public yourPost:Array<any>=new Array();

  public getYourPosts() {
    return this.yourPost;
  }

  public async getReplies(threadId, board) {
    var curr = this;
    let replies = [];
    var db = firebase.firestore();

    // get replies and order by timestamp
    db.collection(board+'/'+threadId+'/replies').orderBy('timestamp').get().then( function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
        var item = doc.data();
        console.log(doc.data());
        console.log(doc.ref.id);

        var date = new Date(item.timestamp);
        console.log((date.getMonth()+1)+ "/" + date.getDate() + "/" +date.getFullYear() +" "+date.getHours()+":"+("0"+date.getMinutes()).slice(-2));


        // add item to the database
        // ensure doc is there for deletion
        replies.push({
          replyTo : item.replyTo,
          text : item.text,
          timestamp : item.timestamp,
          docId : doc.ref.id
        });

        // append image if needed
        if (item.img != null) {
          replies[replies.length-1]['img'] = item.img;
        }
      }
    )});

    return replies;
  }


  // return the items
  public getPosts(collectionName) {
    let postList = [];
    let db = firebase.firestore();

    db.collection(collectionName).get().then( function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
        var item = doc.data();
        console.log(doc.data());
        console.log(doc.ref.id);

        
        // add item to the database
        // ensure doc is there for deletion
        postList.push({
          text : item.text,
          title : item.title,
          timestamp: item.timestamp,
          docId : doc.ref.id
        });

        // check to see if item has image
        if (item.img != null) {
          postList[postList.length-1]['img'] = item.img;
        }
      }
    )});
    return postList;
  }


  // used to create post without image
  public createPostNoImage(title,text,board) {
    var self = this;

    // add to db
    var db = firebase.firestore();
    db.collection(board).add({
      title : title,
      text : text,
      timestamp : Date.now()
    })
    .then(function(docRef) {
      console.log("Document written with ID",docRef.id);
      // add to the post youve made
      self.yourPost.push({
        title : title,
        text : text,
        docId : docRef.id,
        timestamp : Date.now(),
        board : board
      });
    })
    .catch(function(error){
      console.error("Error adding document: ",error);
    });

    // update list as item is now gone
    this.events.publish('dataloaded',Date.now());;
  }

  // this will create a new post with a picture
  public createPost(title,text,img, board) {
    var self = this;

    // add to db
    var db = firebase.firestore();
    db.collection(board).add({
      title : title,
      text : text,
      timestamp :  Date.now(),
      img : img,
    })
    .then(function(docRef) {
      console.log("Document written with ID",docRef.id);
      // add to the post youve made
      self.yourPost.push({
        title : title,
        text : text,
        img : img,
        timestamp : Date.now(),
        docId : docRef.id,
        board : board
      });
    })
    .catch(function(error){
      console.error("Error adding document: ",error);
    });

    
    // update list as item is now gone
    this.events.publish('dataloaded',Date.now());
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

