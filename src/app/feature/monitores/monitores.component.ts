import { Component } from '@angular/core';
import equipo from 'src/assets/json/monitores.json';

@Component({
  selector: 'app-monitores',
  templateUrl: './monitores.component.html',
  styleUrls: ['./monitores.component.css']
})
export class MonitoresComponent {
  Equipo: any = equipo;
  mapa = new Map<string,string>();

  constructor(){
    this.mapa.set("Leidy", "assets/img/lider.png");
    this.mapa.set("Connie", "assets/img/ZCAR_Z.png");
    this.mapa.set("Laura", "assets/img/ZCORI.png");
    this.mapa.set("Ichel", "assets/img/ZCBC.jpg");
    this.mapa.set("Nelson", "assets/img/ZCBOYZ.png");
    this.mapa.set("Juan", "assets/img/ZAO.png");
    this.mapa.set("Melany", "assets/img/ZOCC.png");
    this.mapa.set("zona centro sur", "assets/img/ZCSUR.png");
    this.mapa.set("Yuldor", "assets/img/ZSUR_N.png");
    this.mapa.set("Adriana", "assets/img/ZSUR.png");
    this.mapa.set("Teresa", "assets/img/ZCBC_N.png");
    this.mapa.set("Jhonier", "assets/img/ZCBC_Z.png");
  }
}
