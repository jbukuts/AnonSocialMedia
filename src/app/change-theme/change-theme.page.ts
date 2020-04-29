import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../services/theme.service';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-change-theme',
  templateUrl: './change-theme.page.html',
  styleUrls: ['./change-theme.page.scss'],
})
export class ChangeThemePage implements OnInit {
  checkedValue: boolean;
  constructor(
    private theme: ThemeService,
    private itemservice: ItemService
  ) {   }

  ngOnInit() {
    this.checkedValue = this.itemservice.darkMode;
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
}
