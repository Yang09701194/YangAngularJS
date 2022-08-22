import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { AboutComponent } from './about/about.component'
import { LoginComponent } from './login/login.component'
import { LayoutComponent } from './layout/layout.component';
import { LayoutGuard } from './layout/layout.guard'
import { EnsureLoginGuard } from './login/ensure-login.guard'

const routes: Routes = [
  // {
  //   path: 'home',
  //   component: HomeComponent
  // },
  // {
  //   path: 'about',
  //   component: AboutComponent
  // },
  // {
  //   path: 'login',
  //   component: LoginComponent
  // },
  // {path:'', component: HomeComponent},
  // {path:'**', redirectTo:'home', pathMatch:'full'}
  
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'home',
        canActivate: [LayoutGuard],
        component: HomeComponent
      },
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'login',
        component: LoginComponent,
        canDeactivate: [EnsureLoginGuard],
      },
      {
        path: 'feature',
        loadChildren: () => import('./feature/feature.module').then(module => module.FeatureModule)
      },
      {path:'**', redirectTo:'home', pathMatch:'full'},
    ]
  },
  {
    path: 'feature',
    loadChildren: () => import('./feature/feature.module').then(module => module.FeatureModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    enableTracing: true,
    preloadingStrategy: PreloadAllModules,
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
