import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  routeTo(route) {
    this.router.navigate([route]);
  }

  clearPosts() {
    console.log("Clearing your posts!");
  }

}
