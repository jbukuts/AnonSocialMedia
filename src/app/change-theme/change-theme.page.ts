import { Component, OnInit, Inject } from '@angular/core';
import { ThemeService } from '../services/theme.service';
import { ItemService } from '../item.service';
import { DomSanitizer } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-change-theme',
  templateUrl: './change-theme.page.html',
  styleUrls: ['./change-theme.page.scss'],
})
export class ChangeThemePage implements OnInit {
  checkedValue: boolean;
  themeValue: string;
  backgroundColor = '#ff0000';
  items = [
    { text: 'My first green item', color: '#00ff00' },
    { text: 'My second red item', color: '#ff0000' },
    { text: 'My third blue item', color: '#0000ff' }
  ];
  constructor(
    private theme: ThemeService,
    private itemservice: ItemService,
    private sanitizer: DomSanitizer,
    @Inject(DOCUMENT) private document: Document
  ) {   }

  ngOnInit() {
    this.checkedValue = this.itemservice.darkMode;
    this.themeValue = this.itemservice.themeValue;
  }

  setDarkMode() {
    this.itemservice.darkMode = this.checkedValue;
    if (this.checkedValue) {
      this.enableDark();
    } else {
      this.enableLight();
    }
  }

  enableDark() {
    this.theme.enableDark();
  }

  enableLight() {
    this.theme.enableLight();
  }

  setTheme(value) {
    this.itemservice.themeValue = this.themeValue;
    console.log("setTheme value: ", value);
    if(value == "default"){
      this.theme.enableDefault();
    }
    else if(value == "gamecock"){
      this.theme.enableGamecock();
    }
    else if(value == "christmas"){
      this.theme.enableChristmas();
    }
    else if(value == "halloween"){
      this.theme.enableHalloween();
    }
    else if(value == "summer"){
      this.theme.enableSummer();
    }
    else if(value == "fall"){
      this.theme.enableFall();
    }
    else if(value == "winter"){
      this.theme.enableWinter();
    }
    else if(value == "spring"){
      this.theme.enableSpring();
    }
  }
}
