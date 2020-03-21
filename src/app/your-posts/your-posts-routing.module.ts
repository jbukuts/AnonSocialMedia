import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { YourPostsPage } from './your-posts.page';

const routes: Routes = [
  {
    path: '',
    component: YourPostsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YourPostsPageRoutingModule {}
