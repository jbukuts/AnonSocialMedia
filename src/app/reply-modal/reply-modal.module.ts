import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReplyModalPageRoutingModule } from './reply-modal-routing.module';

import { ReplyModalPage } from './reply-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReplyModalPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ReplyModalPage]
})
export class ReplyModalPageModule {}
