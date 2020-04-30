import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MediaBoardPage } from './media-board.page';

const routes: Routes = [
  {
    path: '',
    component: MediaBoardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MediaBoardPageRoutingModule {}
