import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchPostsPageRoutingModule } from './search-posts-routing.module';

import { SearchPostsPage } from './search-posts.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchPostsPageRoutingModule
  ],
  declarations: [SearchPostsPage]
})
export class SearchPostsPageModule {}
