import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductDetailPageRoutingModule } from './product-detail-routing.module';

import { ProductDetailPage } from './product-detail.page';

import { ReplyModalPageModule } from '../reply-modal/reply-modal.module';
import { ShowReplyModalPageModule } from '../show-reply-modal/show-reply-modal.module';
import { ImageModalPageModule } from '../image-modal/image-modal.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductDetailPageRoutingModule,
    ReplyModalPageModule,
    ImageModalPageModule,
    ShowReplyModalPageModule
  ],
  declarations: [ProductDetailPage]
})
export class ProductDetailPageModule {}
