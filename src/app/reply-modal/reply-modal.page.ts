import { Component, OnInit, Input } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { Validators, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ItemService } from '../item.service';
import * as firebase from 'firebase';
import { Events } from '@ionic/angular';

@Component({
  selector: 'app-reply-modal',
  templateUrl: './reply-modal.page.html',
  styleUrls: ['./reply-modal.page.scss'],
})
export class ReplyModalPage implements OnInit {

  private modalCtrl;
  new_reply_form: FormGroup;

  @Input() replyTo: string;
  @Input() text: string;

  constructor(
    public modalController: ModalController,
    navParams: NavParams,
    public formBuilder: FormBuilder,
    public itemService: ItemService,
    public events: Events
  ) 
  { 
    console.log(navParams.get('replyTo'));
    this.modalCtrl = modalController;
  }

  ngOnInit() {
    this.new_reply_form = this.formBuilder.group({
      text: new FormControl('',Validators.required)
    });
  }

  private createReply(reply) {
    console.log(reply);
    // this will present a toast
    this.itemService.presentToast("Reply Created!");

    // add to db
    var db = firebase.firestore();
    db.collection("reply-post").add({
      text : reply.text,
      postId : this.replyTo
    })
    .then(function(docRef) {
      console.log("Document written with ID",docRef.id);
    })
    .catch(function(error){
      console.error("Error adding document: ",error);
    });

    // clear the form and dismiss the modal
    this.dismiss();
    this.new_reply_form.reset();
    this.events.publish('replychange',Date.now());
  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }

}
