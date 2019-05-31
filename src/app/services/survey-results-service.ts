import { HttpClient, HttpHeaders, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Configuration } from './config';
import { isDevMode } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DataService {

    private getUrl: string;
    private postUrl: string;

    constructor(private http: HttpClient, private configuration: Configuration) {
        this.getUrl = configuration.serverGet;
        this.postUrl = configuration.serverPost;
    }

    public getAll<T>(): Observable<T> {
        return this.http.get<T>(this.getUrl);
    }
    public postAnswers<T>(body: string, password: string): Observable<T> {
        let postHeaders = new HttpHeaders().set('Authorization', 'Basic ' + password);
        return this.http.post<T>(this.postUrl, body, { headers: postHeaders });
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
        if(isDevMode() && req.url === 'api/results/') {
            console.log('dev mode enabled, adding headers');
            req = req.clone({ headers: req.headers.set('Authorization', this.configuration.authToken)});
        }
        
        req = req.clone({ headers: req.headers.set('Accept', 'application/json') });
        return next.handle(req);
    }
}