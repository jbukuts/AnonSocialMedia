import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { YourPostsPageRoutingModule } from './your-posts-routing.module';

import { YourPostsPage } from './your-posts.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    YourPostsPageRoutingModule
  ],
  declarations: [YourPostsPage]
})
export class YourPostsPageModule {}
