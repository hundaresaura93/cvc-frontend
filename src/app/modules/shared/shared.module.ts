import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatFormFieldModule, MatInputModule, MatIconModule, MatStepperModule, MatCheckboxModule, MatSelectModule } from '@angular/material';


@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		MatButtonModule, 
		MatFormFieldModule, 
		MatInputModule, 
		MatIconModule, 
		MatStepperModule, 
		MatCheckboxModule,
		MatSelectModule
	],
	exports: [
		MatButtonModule, 
		MatFormFieldModule, 
		MatInputModule, 
		MatIconModule, 
		MatStepperModule, 
		MatCheckboxModule,
		MatSelectModule
	]
})
export class SharedModule { }
