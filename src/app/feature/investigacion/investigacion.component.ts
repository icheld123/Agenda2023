import { Component } from '@angular/core';
import eventos from 'src/assets/json/eventos_investigacion.json';

@Component({
  selector: 'app-investigacion',
  templateUrl: './investigacion.component.html',
  styleUrls: ['./investigacion.component.css']
})
export class InvestigacionComponent {
  nombre = 'de investigación';
  mes = 'Abril';
  Evento: any = eventos;
  mapa = new Map<string,string>();

  constructor(){
    this.mapa.set("youtube", "assets/img/youtube.png");
    this.mapa.set("zoom", "assets/img/zoom.png");
    this.mapa.set("teams", "assets/img/teams.png");
    this.mapa.set("jitsi", "assets/img/jitsi.jpeg");
    
  }

}
