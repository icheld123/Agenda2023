import { Component } from '@angular/core';
import eventos from 'src/assets/csv/eventos.json';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.css']
})
export class RadioComponent {
  nombre = 'de Radio UNAD Virtual';
  Evento: any = eventos;
  mapa = new Map<string,string>();

  constructor(){
    this.mapa.set("youtube", "assets/img/youtube.png");
    this.mapa.set("zoom", "assets/img/zoom.png");
    this.mapa.set("teams", "assets/img/teams.png");
    this.mapa.set("jitsi", "assets/img/jitsi.jpeg");
    
  }
}
