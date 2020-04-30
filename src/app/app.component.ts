import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import * as firebase from 'firebase';
import { ItemService } from './item.service';
import { Events } from '@ionic/angular';
import { ToastController } from '@ionic/angular';


// Your web app's Firebase configuration
// yay persistent storage
var firebaseConfig = {
  apiKey: "AIzaSyBGy0mnDmXaXDJYuxs-4OefFLChr2sMUDU",
  authDomain: "anonsocialapp.firebaseapp.com",
  databaseURL: "https://anonsocialapp.firebaseio.com",
  projectId: "anonsocialapp",
  storageBucket: "anonsocialapp.appspot.com",
  messagingSenderId: "243665554523",
  appId: "1:243665554523:web:4a197c5c17b66100d1c37e",
  measurementId: "G-5BD5ZV7PRG"
};

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Random',
      url: '/home',
      icon: 'home',
      board: 'original-post'
    },
    {
      title: 'Art',
      url: '/art-board',
      icon: 'brush',
      board: 'art-post'
    },
    {
      title: 'Media',
      url: '/media-board',
      icon: 'videocam',
      board: 'media-post'
    },
    {
      title: 'Search All Posts',
      url: '/search-posts',
      icon: 'search'
    }
  ];

  public yourStuff = [
    {
      title: 'Your Posts',
      url: '/your-posts',
      icon: 'list'
    },
    {
      title: 'Settings',
      url: '/settings',
      icon: 'settings'
    }
  ];

  public boards = {
    'original-post' : 0,
    'art-post': 0,
    'media-post' : 0
  };

  getPostAmount(board) {
    var self = this;
    return self.boards[board];
  }

  private itemService : ItemService;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public events: Events, 
    public toastController: ToastController
  ) {
    this.initializeApp();
  }

  async initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      var self = this;

      // initalize conncetion to db
      firebase.initializeApp(firebaseConfig);
      this.itemService = new ItemService(this.events,this.toastController);

      for (var key in self.boards) {
        firebase.firestore().collection(key).get().then(function(querySnapshot) {
          self.boards[key] = querySnapshot.size;
          console.log(self.boards[key]);
        });
      }
    });
  }
}