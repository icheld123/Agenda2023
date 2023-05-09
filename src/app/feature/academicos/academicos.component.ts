import { Component } from '@angular/core';
import eventos from 'src/assets/json/eventos_academicos.json';

@Component({
  selector: 'app-academicos',
  templateUrl: './academicos.component.html',
  styleUrls: ['./academicos.component.css']
})
export class AcademicosComponent {
  nombre = 'académicos';
  mes = 'Mayo';
  Evento: any = eventos;
  mapa = new Map<string,string>();

  constructor(){
    this.mapa.set("youtube", "assets/img/youtube.png");
    this.mapa.set("zoom", "assets/img/zoom.png");
    this.mapa.set("teams", "assets/img/teams.png");
    this.mapa.set("jitsi", "assets/img/jitsi.jpeg");

  }

}
