import { Component, OnInit, Input } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { Validators, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ItemService } from '../item.service';
import * as firebase from 'firebase';
import { Events } from '@ionic/angular';

@Component({
  selector: 'app-show-reply-modal',
  templateUrl: './show-reply-modal.page.html',
  styleUrls: ['./show-reply-modal.page.scss'],
})
export class ShowReplyModalPage implements OnInit {

  private modalCtrl;

  @Input() post: any;

  constructor(
    public modalController: ModalController,
    navParams: NavParams,
    public itemService: ItemService,
    public events: Events
  ) {
    this.modalCtrl = modalController;
   }

  ngOnInit() {
  }

  private getDate(d) {
    var date = new Date(parseInt(d));
    return (date.getMonth()+1)+ "/" + date.getDate() + "/" +date.getFullYear() +" "+date.getHours()+":"+("0"+date.getMinutes()).slice(-2)+":"+("0"+date.getSeconds()).slice(-2);
  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }

}
