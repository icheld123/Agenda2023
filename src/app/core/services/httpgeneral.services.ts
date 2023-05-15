import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';


@Injectable()
export class HttpgeneralService {

  constructor(public http: HttpClient) {}

  public doPost(url: string, body: any, params?: HttpParams): Observable<any>{
    return this.http.post<any>(url, body, {headers: this.getHttpHeaders(), params: params})
  }

  public doGet<T>(url: string, data: any){
    return this.http.get<T>(url, {params: data})
  }

  getHttpHeaders(): HttpHeaders {
    return new HttpHeaders().set('xhr-name', 'consultar registros');
  }
}
