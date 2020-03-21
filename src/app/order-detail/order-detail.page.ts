import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ItemService } from '../item.service';
import * as firebase from 'firebase';


@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.page.html',
  styleUrls: ['./order-detail.page.scss'],
})
export class OrderDetailPage implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public itemService: ItemService,
    public alertController: AlertController
  ) { }


  // represents the current order
  current_order;

  // return to order page
  goBack() {
    this.router.navigate(['./list']);
  }

  ngOnInit() {
    this.route.params.subscribe(
      param => {
        this.current_order = param;
        console.log(this.current_order);
      }
    );
  }

}
