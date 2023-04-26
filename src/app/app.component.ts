import { Component, HostBinding, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  logo = 'https://noticias.unad.edu.co/templates/unadgeneral/images/logoUNAD.png';
  eventos = [
    {nombre: 'Académicos',
    url:'/academicos'},
    {nombre: 'Investigación',
    url:'/investigacion'},
    {nombre: 'Biblioteca',
    url:'biblioteca'}
  ];

  vermas = [
    {nombre: 'Historias de Líderes Unadistas',
    url:'https://camilariveraflye.wixsite.com/egresadosunad'},
    {nombre: 'Portafolio de Servicios y Beneficios',
    url:'https://view.genial.ly/5f24ad16dfd2410db873d5f6/presentation-mes-agosto'},
    {nombre: 'Grabaciones: Conferencias de Empleabilidad',
    url:'https://andressanchezkensh.wixsite.com/my-site'},
    {nombre: 'Boletín Bibliográfico Vol. 11',
    url:'https://sandrapatriciacarr.wixsite.com/my-site-1'}
  ];

  isMenuOpen: boolean = false;

  constructor() { }

  toggleMenu(): void{
    console.log("toggle")
    this.isMenuOpen = !this.isMenuOpen;
  }

}
