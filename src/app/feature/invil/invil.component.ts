import { Component } from '@angular/core';
import eventos from 'src/assets/json/eventos_invil.json';

@Component({
  selector: 'app-invil',
  templateUrl: './invil.component.html',
  styleUrls: ['./invil.component.css']
})
export class InvilComponent {
  nombre = 'de INVIL';
  mes = 'Abril';
  Evento: any = eventos;
  mapa = new Map<string,string>();

  constructor(){
    this.mapa.set("zoom", "assets/img/zoom.png");
    this.mapa.set(" ", "assets/img/logomini.png");
    this.mapa.set("jitsi", "assets/img/jitsi.jpeg");
    
  }
}
