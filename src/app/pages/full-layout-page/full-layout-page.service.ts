import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class FullLayoutPageService {

    constructor(
        private http: HttpClient
    ) {
    }

    httpOptions = {
        headers: new HttpHeaders({
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
            'Authorization': 'my-auth-token',
            'Access-Control-Allow-Credentials': 'true',
            'Access-Control-Request-Method':'GET'
        })
    }
    urlEncoded = './assets/develop.env';
    develpenv = 'test'
    getInit(){
        return this.http.get(this.urlEncoded, {responseType: 'text'}).subscribe( res =>{
            this.develpenv = res;
        });
    }

    getStates(): any{
        let headers = new HttpHeaders();
        headers.append('Access-Control-Allow-Origin' , '*');
        headers.append('Content-Type', 'application/json');
        headers.append('Access-Control-Allow-Methods', 'GET');

        let url:string;
        if(this.develpenv === 'test')url = 'http://59.120.208.205:60080/api/visualize/Traffic-Special-Case.php';
        else if(this.develpenv === 'product') url = 'http://203.72.154.52:8016/?script=traffic_special_case&args=';
        else url = 'http://59.120.208.205:60080/api/visualize/Traffic-Special-Case.php';
        return this.http.get(url,{headers:headers}).toPromise();
    }
}
