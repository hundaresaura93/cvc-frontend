import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class LoginService {

	constructor(private http: HttpClient) { }

	public adminlogin(admin) {
		const payload: any = {};
		payload.email = admin.email;
		payload.password = admin.password;
		return this.http.post('authenticate-system-user', payload).pipe(map(resp => resp));
	}

	public setAdminSession(email:string){
		localStorage.setItem('email', email);
	}
}
