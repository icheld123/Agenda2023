import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  title = 'proyecto';
  name = 'Ichel';
  img = 'assets/img/bg.png';
  mes = 'Enero';
  ano = '2023';
}
