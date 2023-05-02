
export class Oferta {
  zona: string;
  ubicacion: string;
  titulo: string;
  requisitos: string[];
  observaciones: string[];
  url: string;


  constructor(zona: string, ubicacion: string, titulo: string, requisitos: string[], observaciones: string[], url: string){
      this.zona = zona;
      this.ubicacion = ubicacion;
      this.titulo = titulo;
      this.requisitos = requisitos;
      this.observaciones = observaciones;
      this.url = url;
  }
}
