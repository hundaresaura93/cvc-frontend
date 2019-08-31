import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuperAdminRoutingModule } from './super-admin-routing.module';
import { SuperAdminComponent } from './super-admin/super-admin.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
	declarations: [SuperAdminComponent],
	imports: [
		CommonModule,
		SuperAdminRoutingModule,
		MatSidenavModule,
		FormsModule,
		ReactiveFormsModule,
		SharedModule
	]
})
export class SuperAdminModule { }
