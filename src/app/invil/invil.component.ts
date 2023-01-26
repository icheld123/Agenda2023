import { Component } from '@angular/core';
import eventos from 'src/assets/csv/eventos.json';

@Component({
  selector: 'app-invil',
  templateUrl: './invil.component.html',
  styleUrls: ['./invil.component.css']
})
export class InvilComponent {
  nombre = 'de INVIL';
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
