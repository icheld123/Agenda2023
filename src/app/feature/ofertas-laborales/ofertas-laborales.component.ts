import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Oferta } from '../shared/model/oferta';
import { ResponseRequest } from '../shared/model/responseRequest';
import { OfertaService } from '../shared/service/oferta.services';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpParams } from '@angular/common/http';

const params = {
  majorDimension: environment.majorDimension,
  key: environment.key
};

const CABECERA = ["ID", "ZONA", "UBICACIÓN", "TITULO", "REQUISITOS", "CONDICIONES", "URL", "¿APLICÓ?"];
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
  public mostrarModal: boolean = false;
  public modal = {
    titulo: "",
    contenido: ""
  }

  constructor(protected ofertaService: OfertaService){
    this.listarOfertas();
  }

  async listarOfertas(){
    this.responseRequest = await this.ofertaService.obtenerOfertas(environment.endpoint, environment.apiRoute, params).toPromise().then();
    //console.log(this.responseRequest);
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
      if(element.length == 6){
        let oferta = new Oferta(element[0],element[1],element[2],element[3],
                                this.convertirStringEnArray(element[4]),
                                this.convertirStringEnArray(element[5]),
                                element[6]);
          this.construirArrayZonas(element[1]);
          arrayDeObjetos.push(oferta);
      }

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

  public abrirModal(oferta: Oferta){
    this.mostrarModal = true;
    this.llenarGoogleForm(oferta.id);
  }

  public cerrarModal(){
    this.mostrarModal = false;
  }

  public llenarGoogleForm(id: string){
    console.log(id);
    let params = new HttpParams();
    params = params.append('entry.265503233', 3213213);
    params = params.append('entry.328376619', 112213);
    params = params.append('entry.486661795', "natalia");
    params = params.append('entry.432602229', "test@test.com");
    params = params.append('entry.923630514', "id1");

    this.ofertaService.guardar("https://docs.google.com/forms/d/e/1FAIpQLSdjv3pJ-3DXB3n0P2VwKYAAdU0Zyrz5HeszNJmryPhTI3ExWw/formResponse?entry.265503233=3213213&entry.328376619=112213&entry.486661795=natalia&entry.432602229=test@test.com&entry.923630514=id1", "").subscribe((response: any) => {
      console.log(response);
    });

    // this.ofertaService.guardar("https://docs.google.com/forms/d/e/1FAIpQLSdjv3pJ-3DXB3n0P2VwKYAAdU0Zyrz5HeszNJmryPhTI3ExWw/formResponse?entry.265503233=3213213&entry.328376619=112213&entry.486661795=natalia&entry.432602229=test@test.com&entry.923630514=id1", "");
    // let input = document.getElementsByClassName("whsOnd zHQkBf")[1] as HTMLElement

    // input.focus();
    // document.execCommand('insertText', false, id);
  }

  ngOnInit(){
    this.construirFormularioFiltro();
  }

}
