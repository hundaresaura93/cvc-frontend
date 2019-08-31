import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { AuthService } from '../../modules/auth/services/auth.service';

@Injectable({
	providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {

	constructor(private authService: AuthService) { }

	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		let headers = {};
		if (this.authService.getToken() !== null) {
			if (req.headers.has('XSkipIntercetpr')) {
				req.headers.delete('XSkipIntercetpr');
				headers = {
					Authorization: 'Bearer ' + this.authService.getToken(),
					'Content-Type': 'application/json'
				};
			} else {
				headers = {
					'Content-Type': 'application/json'
				};
			}
		}

		req = req.clone({
			setHeaders: headers
		});

		return next.handle(req).pipe(map(res => {
			if (res instanceof HttpResponse) {
				return res;
			}
		}),
			catchError((error: HttpErrorResponse) => {
				let data = {};
				data = {
					message: error.message,
				};
				console.log(data);
				return throwError(error);
			})
		);
	}
}
