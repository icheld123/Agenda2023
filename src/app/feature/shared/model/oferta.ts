
export class Oferta {
  id: string;
  zona: string;
  ubicacion: string;
  titulo: string;
  requisitos: string[];
  observaciones: string[];
  url: string;


  constructor(id: string, zona: string, ubicacion: string, titulo: string, requisitos: string[], observaciones: string[], url: string){
      this.id = id;
      this.zona = zona;
      this.ubicacion = ubicacion;
      this.titulo = titulo;
      this.requisitos = requisitos;
      this.observaciones = observaciones;
      this.url = url;
  }
}
