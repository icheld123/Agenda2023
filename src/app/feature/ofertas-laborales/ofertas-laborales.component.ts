import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Oferta } from '../shared/model/oferta';
import { ResponseRequest } from '../shared/model/responseRequest';
import { OfertaService } from '../shared/service/oferta.services';
// import { FormGroup, FormControl, Validators } from '@angular/forms';
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
  public mostrarModal: boolean = false;
  public valueID: string;
  public mostrarForm: boolean = true;
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
    await this.listarOfertas();
    let valueSelect = document.getElementById("zona") as HTMLFormElement
    if (this.ofertas.length > 0 && valueSelect["value"] != ""){
      this.ofertasFiltrados = [];
      this.ofertas.forEach(oferta => {
        if (oferta.zona.toLowerCase() == valueSelect["value"].toLowerCase()){
          this.ofertasFiltrados.push(oferta);
        }
      });
    }
  }

  // public construirFormularioFiltro(){
  //   this.filtroForm = new FormGroup({
  //     zona: new FormControl("", Validators.required),
  //   });
  // }

  public abrirModal(oferta: Oferta){
    this.mostrarModal = true;
    this.mostrarForm = true;
    this.llenarGoogleForm(oferta.id);
  }

  public cerrarModal(){
    this.mostrarModal = false;
  }

  public llenarGoogleForm(id: string){
    // let inputID = document.getElementById("entry.923630514") as HTMLFormElement
    // inputID["value"] = id;
    this.valueID = id;
    console.log(this.valueID);
    // let valueId = document.getElementsByName("entry.923630514") as HTMLFormElement

  }

  public iframeLoad(){
    console.log("Se recargo");
    if(this.mostrarForm){
      this.limpiarForm();
      this.mostrarForm = false;
    }

  }

  public limpiarForm(){
    let form = document.getElementById("my-form") as HTMLFormElement
    form["entry.432602229"].value = "";
    form["entry.328376619"].value = "";
    form["entry.486661795"].value = "";
    form["entry.265503233"].value = "";


  }

  ngOnInit(){
    // this.construirFormularioFiltro();
  }

}
