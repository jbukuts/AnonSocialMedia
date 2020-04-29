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
  @Input() originalPost: string;

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

  // called when the button is clicked
  private async createReply(reply) {
    console.log(reply);
    // this will present a toast
    await this.itemService.presentToast("Reply Created!");

    var self = this;

    // add to db
    var db = firebase.firestore();
    db.collection('original-post/'+this.originalPost+'/replies').add({
      text : reply.text,
      replyTo : this.replyTo,
      timestamp : Date.now()
    })
    .then(function(docRef) {
      console.log("Document written with ID",docRef.id);
      // TODO: add replies to your post!
    })
    .catch(function(error){
      console.error("Error adding document: ",error);
    });

    // clear the form and dismiss the modal
    await this.dismiss();
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
