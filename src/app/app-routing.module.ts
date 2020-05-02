import {NgModule} from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {CucuDetailComponent} from './components/cucu-detail/cucu-detail.component';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'cucus/:id', component: CucuDetailComponent,
  },
  {
    path: 'manifest',
    loadChildren: () => import('./components/manifest/manifest.module').then(m => m.ManifestModule)
  },
  {
    path: 'how',
    loadChildren: () => import('./components/how/how.module').then(m => m.HowModule)
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
      // scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
      useHash: false,
      enableTracing: false,
      scrollOffset: [0, 64],
      onSameUrlNavigation: 'reload'
    }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
