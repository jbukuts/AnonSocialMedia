import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArtBoardPage } from './art-board.page';

const routes: Routes = [
  {
    path: '',
    component: ArtBoardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArtBoardPageRoutingModule {}
