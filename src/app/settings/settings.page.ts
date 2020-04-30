import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItemService } from '../item.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  
  constructor(
    private router: Router,
    private itemService: ItemService,
    public alertController: AlertController
  ) { }

  ngOnInit() {
  }

  // routes to input page
  routeTo(route) {
    this.router.navigate([route]);
  }

  async presentAlertConfirm() {

    if (this.itemService.yourPost.length == 0) {
      this.itemService.presentToast("There's nothing to clear!");
      return;
    }

    const alert = await this.alertController.create({
      header: 'Clear Posts Locally',
      message: 'You sure about this?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Yes',
          handler: () => {
            console.log('Confirm Okay');
            let length = this.itemService.yourPost.length;
            this.itemService.yourPost = [];
            this.itemService.presentToast("You cleared "+length+" posts");
          }
        }
      ]
    });

    await alert.present();
  }

}
