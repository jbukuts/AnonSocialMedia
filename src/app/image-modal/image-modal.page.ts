import { Component, OnInit, Input } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-image-modal',
  templateUrl: './image-modal.page.html',
  styleUrls: ['./image-modal.page.scss'],
})
export class ImageModalPage implements OnInit {

  private modalCtrl;

  @Input() img: string;

  constructor(
    public modalController: ModalController,
    navParams: NavParams,
  ) 
  { 
    console.log(navParams.get('img'));
    this.modalCtrl = modalController;
  }

  ngOnInit() {
  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }

  // to zoom the image
  zoom(zoomIn : boolean) {

  }

}
