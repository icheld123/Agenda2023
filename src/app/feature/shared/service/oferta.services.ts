import { Injectable } from '@angular/core';
import { ResponseRequest } from '../model/responseRequest';
import { HttpgeneralService } from 'src/app/core/services/httpgeneral.services';

@Injectable()
export class OfertaService {

  constructor(protected http: HttpgeneralService) {}

  public obtenerOfertas(endpoint: string, apiRoute: string, data: any){
    return this.http.doGet<ResponseRequest>(`${endpoint + apiRoute}`, data);
  }

}
