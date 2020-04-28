import { Injectable } from '@angular/core';
import { Events } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import * as firebase from 'firebase';
import { ToastController } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})

export class ItemService {

  ref = firebase.database().ref('original-post/');

  constructor(public events: Events, public toastController: ToastController) {
    console.log("loading saved items");

    this.ref.on('value', resp => {
      this.posts = [];
      this.posts = snapshotToArray(resp);
      console.log(this.posts.length+" items loaded");
      console.log(this.posts);
      this.events.publish('dataloaded',Date.now());
    });
  }

  posts:Array<any>=new Array();

  // this will represent the post you have made
  yourPost:Array<any>=new Array();


  // return the items
  public getPosts() {
    var curr = this;
    curr.posts = [];
    var db = firebase.firestore();

    db.collection('original-post').get().then( function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
        var item = doc.data();
        console.log(doc.data());
        console.log(doc.ref.id);

        // add item to the database
        // ensure doc is there for deletion
        curr.posts.push({
          number : item.number,
          text : item.text,
          title : item.title,
          img : item.img,
          docId : doc.ref.id
        });
      }
    )});
    curr.events.publish('dataloaded',Date.now());
  }


  // this will create a new item
  public createPost(title,text,img) {

    // add to db
    var db = firebase.firestore();
    db.collection("original-post").add({
      title : title,
      text : text,
      img : img,
      number : 0,
    })
    .then(function(docRef) {
      console.log("Document written with ID",docRef.id);
    })
    .catch(function(error){
      console.error("Error adding document: ",error);
    });

    // update list as item is now gone
    this.events.publish('dataloaded',Date.now());
    this.getPosts();
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

  filterPosts(searchTerm) {
    console.log("filtering: " + searchTerm);
    return this.posts.filter(post => {
      return post.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });
  }

}

export const snapshotToArray = snapshot => {
  let returnArr = [];

  snapshot.forEach(childSnapshot => {
    let item = childSnapshot.val();
    item.key = childSnapshot.key;
    console.log(item);
    returnArr.push(item);
  });
  return returnArr;
}
