import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArtBoardPageRoutingModule } from './art-board-routing.module';

import { ArtBoardPage } from './art-board.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArtBoardPageRoutingModule
  ],
  declarations: [ArtBoardPage]
})
export class ArtBoardPageModule {}
