import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MediaBoardPageRoutingModule } from './media-board-routing.module';

import { MediaBoardPage } from './media-board.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MediaBoardPageRoutingModule
  ],
  declarations: [MediaBoardPage]
})
export class MediaBoardPageModule {}
