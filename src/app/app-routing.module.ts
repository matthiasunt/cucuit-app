import {NgModule} from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {CucuDetailEntryComponent} from './components/cucu-detail/cucu-detail-entry.component';
import {CucuDetailComponent} from './components/cucu-detail/cucu-detail.component';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'cucus/:id', component: CucuDetailComponent,
    // outlet: 'modal'
  },
  {
    path: 'manifest',
    loadChildren: () => import('./components/manifest/manifest.module').then(m => m.ManifestModule)
  },
  // {
  //   path: '**',
  //   redirectTo: ''
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
      // preloadingStrategy: PreloadAllModules,
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
      useHash: false,
      enableTracing: false,
      scrollOffset: [0, 100],
    }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
