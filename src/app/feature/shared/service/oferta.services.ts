import { Injectable } from '@angular/core';
import { ResponseRequest } from '../model/responseRequest';
import { HttpgeneralService } from 'src/app/core/services/httpgeneral.services';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable()
export class OfertaService {

  constructor(protected http: HttpgeneralService) {}

  public obtenerOfertas(endpoint: string, apiRoute: string, data: any){
    return this.http.doGet<ResponseRequest>(`${endpoint + apiRoute}`, data);
  }

  public guardar(endpoint: string, body: any, params?: HttpParams): Observable<any>{
    return this.http.doPost(endpoint, body, params);
  }
}
