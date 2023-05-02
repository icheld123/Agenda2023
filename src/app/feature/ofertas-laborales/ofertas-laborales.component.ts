import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Oferta } from '../shared/model/oferta';
import { ResponseRequest } from '../shared/model/responseRequest';
import { OfertaService } from '../shared/service/oferta.services';
import { FormGroup, FormControl, Validators } from '@angular/forms';

const params = {
  majorDimension: environment.majorDimension,
  key: environment.key
};

const CABECERA = ["ZONA", "UBICACIÓN", "TITULO", "REQUISITOS", "OBSERVACIONES", "URL"];
const CARACTER_DIVISOR = "-";

@Component({
  selector: 'app-ofertas-laborales',
  templateUrl: './ofertas-laborales.component.html',
  styleUrls: ['./ofertas-laborales.component.css']
})
export class OfertasLaboralesComponent implements OnInit {

  public ofertas: Array<Oferta> = [];
  public ofertasFiltrados: Array<Oferta> = [];
  public cantidadOfertas!: number;
  public responseRequest!: ResponseRequest;
  public cabecera = CABECERA;
  public zonasDelResponse: string[] = [];
  public filtroForm: FormGroup;

  constructor(protected ofertaService: OfertaService){
    this.listarOfertas();
  }

  async listarOfertas(){
    this.responseRequest = await this.ofertaService.obtenerOfertas(environment.endpoint, environment.apiRoute, params).toPromise().then();
    // console.log(this.responseRequest);
    if (this.responseRequest.values.length > 0){
      this.ofertas = this.mapearArrayOfertas(this.responseRequest.values);
      this.ofertasFiltrados = this.ofertas;
      this.cantidadOfertas = this.ofertasFiltrados.length;
      // console.log(this.ofertasFiltrados);
    }
    else {
      console.log("No se obtuvieron valores en la respuesta");
    }
  }

  private mapearArrayOfertas(values: string[]){
    let arrayDeObjetos = [];
    this.zonasDelResponse = [];
    for (let index = 1; index < values.length; index++) {
      const element = values[index];
      let oferta = new Oferta(element[0],element[1],element[2],
                              this.convertirStringEnArray(element[3]),
                              this.convertirStringEnArray(element[4]),
                              element[5]);
      this.construirArrayZonas(element[0]);
      arrayDeObjetos.push(oferta);
    }
    // console.log("Zonas: " + this.zonasDelResponse);
    return arrayDeObjetos;
  }

  private construirArrayZonas(element:string){
    if (!this.zonasDelResponse.includes(element)){
      this.zonasDelResponse.push(element);
    }
  }


  private convertirStringEnArray(contenido: string){
    let auxContenido: string[] = [];
    let contenidoDividido = contenido.split(CARACTER_DIVISOR);
    contenidoDividido.forEach(element => {
      if (element.length > 5){
        auxContenido.push(element);
      }
    });
    return auxContenido;
  }

  async iniciarFiltro(){
    // console.log(this.filtroForm.value);
    // console.log(this.filtroForm.valid);
    await this.listarOfertas();
    if (this.ofertas.length > 0 && this.filtroForm.valid){
      this.ofertasFiltrados = [];
      this.ofertas.forEach(oferta => {
        if (oferta.zona.toLowerCase() == this.filtroForm.value.zona.toLowerCase()){
          this.ofertasFiltrados.push(oferta);
        }
      });
    }
  }

  public construirFormularioFiltro(){
    this.filtroForm = new FormGroup({
      zona: new FormControl("", Validators.required),
    });
  }

  ngOnInit(){
    this.construirFormularioFiltro();
  }

}
