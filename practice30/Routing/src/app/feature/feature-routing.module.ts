import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeatureComponent } from './feature.component'

const routes: Routes = [
  {
    path: '',
    component: FeatureComponent
  },
  // {
  //   path: '',
  //   component: FeatureComponent
  // },
  // {
  //   path: 'feature',
  //   loadChildren: () => import('./feature.module').then(module => module.FeatureModule)
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule { }
