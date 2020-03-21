import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchPostsPage } from './search-posts.page';

const routes: Routes = [
  {
    path: '',
    component: SearchPostsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchPostsPageRoutingModule {}
