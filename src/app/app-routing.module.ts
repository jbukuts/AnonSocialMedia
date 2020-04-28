import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    // home page of the app
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'new-item',
    loadChildren: () => import('./new-item/new-item.module').then( m => m.NewItemPageModule)
  },
  {
    path: 'product-detail',
    loadChildren: () => import('./product-detail/product-detail.module').then( m => m.ProductDetailPageModule)
  },
  {
    path: 'order-detail',
    loadChildren: () => import('./order-detail/order-detail.module').then( m => m.OrderDetailPageModule)
  },
  {
    path: 'reply-modal',
    loadChildren: () => import('./reply-modal/reply-modal.module').then( m => m.ReplyModalPageModule)
  },
  {
    path: 'image-modal',
    loadChildren: () => import('./image-modal/image-modal.module').then( m => m.ImageModalPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'your-posts',
    loadChildren: () => import('./your-posts/your-posts.module').then( m => m.YourPostsPageModule)
  },
  {
    path: 'search-posts',
    loadChildren: () => import('./search-posts/search-posts.module').then( m => m.SearchPostsPageModule)
  },
  {
    path: 'app-info',
    loadChildren: () => import('./app-info/app-info.module').then( m => m.AppInfoPageModule)
  },
  {
    path: 'change-theme',
    loadChildren: () => import('./change-theme/change-theme.module').then( m => m.ChangeThemePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
