import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./components/add-cucu/add-cucu.module').then(m => m.AddCucuModule)
  },
  {
    path: '**',
    loadChildren: () => import('./components/add-cucu/add-cucu.module').then(m => m.AddCucuModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
