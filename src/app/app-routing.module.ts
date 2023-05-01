import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcademicosComponent } from './academicos/academicos.component';
import { BibliotecaComponent } from './biblioteca/biblioteca.component';
import { InicioComponent } from './inicio/inicio.component';
import { InvestigacionComponent } from './investigacion/investigacion.component';
import { InvilComponent } from './invil/invil.component';
import { MonitoresComponent } from './monitores/monitores.component';
import { RadioComponent } from './radio/radio.component';
import { TvComponent } from './tv/tv.component';

const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'academicos', component: AcademicosComponent},
  {path: 'biblioteca', component: BibliotecaComponent},
  {path: 'investigacion', component: InvestigacionComponent},
  {path: 'radio', component: RadioComponent},
  {path: 'tv', component: TvComponent},
  {path: 'invil', component: InvilComponent},
  {path: 'monitores', component: MonitoresComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
