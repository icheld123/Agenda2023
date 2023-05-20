import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';


@Injectable()
export class HttpgeneralService {

  constructor(public http: HttpClient) {}

  public doPost(url: string, body: any, options?: any){
    return this.http.post<any>(url, body, options);
  }

  public doGet<T>(url: string, data: any){
    return this.http.get<T>(url, {params: data})
  }

  getHttpHeaders(): HttpHeaders {
    let headers = new HttpHeaders().set('access-control-allow-origin',"*");
    // let headers = new HttpHeaders();
    headers.set('xhr-name', 'consultar registros');
    return headers;
  }
}
