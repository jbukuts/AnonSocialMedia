import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowReplyModalPageRoutingModule } from './show-reply-modal-routing.module';

import { ShowReplyModalPage } from './show-reply-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShowReplyModalPageRoutingModule
  ],
  declarations: [ShowReplyModalPage]
})
export class ShowReplyModalPageModule {}
