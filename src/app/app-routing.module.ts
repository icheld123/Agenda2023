import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcademicosComponent } from './feature/academicos/academicos.component';
import { BibliotecaComponent } from './feature/biblioteca/biblioteca.component';
import { InicioComponent } from './feature/inicio/inicio.component';
import { InvestigacionComponent } from './feature/investigacion/investigacion.component';
import { InvilComponent } from './feature/invil/invil.component';
import { MonitoresComponent } from './feature/monitores/monitores.component';
import { OfertasLaboralesComponent } from './feature/ofertas-laborales/ofertas-laborales.component';
import { RadioComponent } from './feature/radio/radio.component';
import { TvComponent } from './feature/tv/tv.component';

const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'academicos', component: AcademicosComponent},
  {path: 'biblioteca', component: BibliotecaComponent},
  {path: 'investigacion', component: InvestigacionComponent},
  {path: 'radio', component: RadioComponent},
  {path: 'tv', component: TvComponent},
  {path: 'invil', component: InvilComponent},
  {path: 'monitores', component: MonitoresComponent},
  {path: 'ofertas', component: OfertasLaboralesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
