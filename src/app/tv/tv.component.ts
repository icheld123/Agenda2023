import { Component } from '@angular/core';
import eventos from 'src/assets/csv/eventos.json';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.css']
})
export class TvComponent {
  nombre = 'de TV UNAD Virtual';
  Evento: any = eventos;
  mapa = new Map<string,string>();

  constructor(){
    this.mapa.set("youtube", "../assets/img/youtube.png");
    this.mapa.set("zoom", "../assets/img/zoom.png");
    this.mapa.set("teams", "../assets/img/teams.png");
    this.mapa.set("jitsi", "../assets/img/jitsi.jpeg");
    
  }
}
