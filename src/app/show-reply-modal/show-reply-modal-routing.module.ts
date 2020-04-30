import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowReplyModalPage } from './show-reply-modal.page';

const routes: Routes = [
  {
    path: '',
    component: ShowReplyModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowReplyModalPageRoutingModule {}
