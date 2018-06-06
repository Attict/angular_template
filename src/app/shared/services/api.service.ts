import { Injectable } from '@angular/core';
import { Http, URLSearchParams, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

import { environment } from '../../../environments/environment';

@Injectable()
export class ApiService {
    constructor(
        private http: Http
    ) {}

    get(path: string, params: URLSearchParams = new URLSearchParams()): Observable<any> {
        return this.http.get(`${environment.apiUrl}${path}`, {
            headers: this.setHeaders(),
            search: params
        })
        .catch(this.formatErrors)
        .map(response => response.json());
    }

    private setHeaders(): Headers {
        /// TODO:
        const headerConfig = {
            // 'Content-Type': 'application/json',
            // 'Accept': 'application/json'
        };

        // if (this.jwtService.getToken()) {
        //     headersConfig['Authorization'] = `Token ${this.jwtService.getToken()}`;
        // }

        return new Headers(headerConfig);
    }

    private formatErrors(error: any) {
        return Observable.throw(error.json());
    }
}