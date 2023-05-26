import { Component, OnInit } from '@angular/core';
import { environment, environmentForm } from 'src/environments/environment';
import { Oferta } from '../shared/model/oferta';
import { ResponseRequest } from '../shared/model/responseRequest';
import { OfertaService } from '../shared/service/oferta.services';
// import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { regularCharacterValidator } from '../shared/validaciones/ofertas.validator';

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

  public formAplicacion: FormGroup;
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
      if(element.length == 7){
        let oferta = new Oferta(element[0],element[1],element[2],element[3],
                                this.convertirStringEnArray(element[4]),
                                this.convertirStringEnArray(element[5]),
                                element[6]);
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

  async iniciarPeticionPost(){
    console.log(this.formAplicacion.value);
    console.log(this.formAplicacion.valid);

    if (this.formAplicacion.valid){
      const body = new URLSearchParams();
      body.set('entry.41887965', this.formAplicacion.value.id);
      body.set('entry.1256711967', this.formAplicacion.value.email);
      body.set('entry.1626840047', this.formAplicacion.value.cedula);
      body.set('entry.1959726330', this.formAplicacion.value.nombre);
      body.set('entry.1289675046', this.formAplicacion.value.telefono);
      let options = {
        headers: new HttpHeaders().set(
          'Content-Type',
          'application/x-www-form-urlencoded'
        )
        // params: new HttpParams().set(
        //   'key',
        //   environmentForm.key
        // )
      };

      try {
        this.ofertaService.guardar(environmentForm.endpoint, body, options).subscribe({
          next: data => {
            console.log(data);
          },
          error: error =>{
            console.log(error);
            this.mostrarForm = false;
          }
        })
      } catch (error) {
        console.log("hubo error");
        console.log(error);
      }

    }

  }

  public llenarGoogleForm(id: string){
    // let inputID = document.getElementById("entry.923630514") as HTMLFormElement
    // inputID["value"] = id;
    this.formAplicacion.controls['id'].setValue(id);
    console.log(this.formAplicacion.value.id);
    // let valueId = document.getElementsByName("entry.923630514") as HTMLFormElement

  }

  // public iframeLoad(){
  //   console.log("Se recargo");
  //   if(this.mostrarForm){
  //     this.limpiarForm();
  //     this.mostrarForm = false;
  //   }

  // }

  // public limpiarForm(){
  //   let form = document.getElementById("my-form") as HTMLFormElement
  //   form["entry.432602229"].value = "";
  //   form["entry.328376619"].value = "";
  //   form["entry.486661795"].value = "";
  //   form["entry.265503233"].value = "";
  // }

  public construirFormulario(){

    this.formAplicacion = new FormGroup({
      id: new FormControl("", Validators.required),
      email: new FormControl("", [Validators.required, Validators.email]),
      cedula: new FormControl("", [Validators.required, Validators.min(100000)]),
      nombre: new FormControl("", [Validators.required, Validators.minLength(6), regularCharacterValidator()]),
      telefono: new FormControl("", [Validators.required, Validators.min(1000000000)])
    });
  }

  get emailField() { return this.formAplicacion.get('email'); }
  get cedulaField() { return this.formAplicacion.get('cedula'); }
  get nombreField() { return this.formAplicacion.get('nombre'); }
  get telefonoField() { return this.formAplicacion.get('telefono'); }

  ngOnInit(){
    this.construirFormulario();
  }

}
