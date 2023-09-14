import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { AdminLayoutComponent } from './theme/layout/admin-layout/admin-layout.component';

const routes: Routes = [
  {
    path:'',
    component:LoginComponent
  }, 
  {
    path:'settings',
    component: AdminLayoutComponent,
    loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
