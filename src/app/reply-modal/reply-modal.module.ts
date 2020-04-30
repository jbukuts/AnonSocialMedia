import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { File } from '@ionic-native/file/ngx';
import { Camera } from '@ionic-native/camera/ngx';

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
  providers: [
    Camera,
    File
  ],
  declarations: [ReplyModalPage]
})
export class ReplyModalPageModule {}
