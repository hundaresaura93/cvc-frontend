import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		redirectTo: 'admin-login',
		pathMatch: 'full'
	},
	{
		path: 'admin-login',
		loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)
	},
	{
		path: 'super-admin',
		loadChildren: () => import('./modules/super-admin/super-admin.module').then(m => m.SuperAdminModule)
	},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
