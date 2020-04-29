import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { File } from '@ionic-native/file/ngx';
import { Camera } from '@ionic-native/camera/ngx';

import { IonicModule } from '@ionic/angular';

import { NewItemPageRoutingModule } from './new-item-routing.module';

import { NewItemPage } from './new-item.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewItemPageRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    Camera,
    File
  ],
  declarations: [NewItemPage]
})
export class NewItemPageModule {}
