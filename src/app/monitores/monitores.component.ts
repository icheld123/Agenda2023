import { Component } from '@angular/core';
import equipo from 'src/assets/csv/monitores.json';

@Component({
  selector: 'app-monitores',
  templateUrl: './monitores.component.html',
  styleUrls: ['./monitores.component.css']
})
export class MonitoresComponent {
  Equipo: any = equipo;
  mapa = new Map<string,string>();

  constructor(){
    this.mapa.set("líder", "assets/img/lider.jpeg");
    this.mapa.set("zona caribe", "assets/img/ZCAR.jpeg");
    this.mapa.set("nacional", "assets/img/ZCBOY.png");
    this.mapa.set("zona centro oriente", "assets/img/ZCORI.png");
    this.mapa.set("cundinamarca", "assets/img/ZCBC.png");
    this.mapa.set("boyacá", "assets/img/ZCBOYZ.png");
    this.mapa.set("amazonia", "assets/img/ZAO.png");
    this.mapa.set("occidente", "assets/img/ZOCC.png");
    this.mapa.set("zona centro sur", "assets/img/ZCSUR.png");
    this.mapa.set("zona sur", "assets/img/ZSUR.png");
  }
}
