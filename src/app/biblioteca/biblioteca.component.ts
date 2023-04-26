import { Component } from '@angular/core';
import eventos from 'src/assets/json/eventos_biblioteca.json';

@Component({
  selector: 'app-biblioteca',
  templateUrl: './biblioteca.component.html',
  styleUrls: ['./biblioteca.component.css']
})
export class BibliotecaComponent {
  nombre = 'de biblioteca';
  mes = 'enero';
  Evento: any = eventos;
  mapa = new Map<string,string>();

  constructor(){
    this.mapa.set("youtube", "assets/img/youtube.png");
    this.mapa.set("zoom", "assets/img/zoom.png");
    this.mapa.set("teams", "assets/img/teams.png");
    this.mapa.set("jitsi", "assets/img/jitsi.jpeg");
    
  }

}
