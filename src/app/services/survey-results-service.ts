import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Configuration } from './config';
import { isDevMode } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DataService {

    private actionUrl: string;

    constructor(private http: HttpClient, private configuration: Configuration) {
        this.actionUrl = configuration.serverWithApiUrl;
    }

    public getAll<T>(): Observable<T> {
        return this.http.get<T>(this.actionUrl);
    }
}


@Injectable()
export class CustomInterceptor implements HttpInterceptor {
    constructor(private configuration: Configuration) {
    }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (!req.headers.has('Content-Type')) {
            req = req.clone({ headers: req.headers.set('Content-Type', 'application/json') });
        }
        if(isDevMode()) {
            console.log('dev mode enabled, adding headers');
            req = req.clone({ headers: req.headers.set('Authorization', this.configuration.authToken)});
        }
        
        req = req.clone({ headers: req.headers.set('Accept', 'application/json') });
        return next.handle(req);
    }
}