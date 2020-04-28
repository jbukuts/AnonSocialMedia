import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import * as firebase from 'firebase';

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
      title: 'Home Page',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Your Posts',
      url: '/your-posts',
      icon: 'list'
    },
    {
      title: 'Search Posts',
      url: '/search-posts',
      icon: 'search'
    },
    {
      title: 'Settings',
      url: '/settings',
      icon: 'settings'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      // initalize conncetion to db
      firebase.initializeApp(firebaseConfig);

      var ref = firebase.database().ref("storeItems");
      ref.orderByChild("name").equalTo("sandwich").on("child_added", function(snapshot) {
        console.log(snapshot.key);
      });
      console.log('test');


    });
  }
}