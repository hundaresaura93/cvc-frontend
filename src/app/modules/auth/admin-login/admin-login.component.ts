import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { LoginService } from '../services/login.service';

import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
	selector: 'app-admin-login',
	templateUrl: './admin-login.component.html',
	styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {

	loginForm: FormGroup;

	account_validation_messages = {
		email: [
			{ type: 'required', message: 'Email is required!' },
			{ type: 'pattern', message: 'Enter valid email address!' }
		],
		password: [
			{ type: 'required', message: 'Password is required!' }
		]
	};

	constructor(private formBuilder: FormBuilder,
		private loginService: LoginService,
		private toastService: ToastrService,
		private router: Router) { }

	ngOnInit() {
		this.loginForm = this.formBuilder.group({
			email: ['', [Validators.required, Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
			password: ['', [Validators.required]]
		});
	}

	login() {
		if (this.loginForm.valid) {
			this.loginService.setAdminSession(this.loginForm.value.email);
			this.router.navigate(['super-admin', 'super-admin-dashboard'])
			// this.loginService.adminlogin(this.loginForm.value).subscribe(
			// 	res => {
			// 		if (res['message'] === 'success') {
			// 			this.loginService.setAdminSession(this.loginForm.value.email);
			// 		} else {
			// 			this.toastService.error(
			// 				res['message'], '');
			// 		}
			// 	},
			// 	error => {
			// 		if (error.status === 401) {
			// 			this.toastService.error(
			// 				'Login Failed!',
			// 				error.error.detail,
			// 			);
			// 		}
			// 	}
			// );
		}
	}

}
