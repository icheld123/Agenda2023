import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioComponent } from './formulario/formulario.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { AcademicosComponent } from './academicos/academicos.component';
import { InvestigacionComponent } from './investigacion/investigacion.component';
import { BibliotecaComponent } from './biblioteca/biblioteca.component';
import { RadioComponent } from './radio/radio.component';
import { TvComponent } from './tv/tv.component';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { InvilComponent } from './invil/invil.component';
import { MonitoresComponent } from './monitores/monitores.component';

const appRoutes: Routes = [
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
  declarations: [
    AppComponent,
    FormularioComponent,
    NavBarComponent,
    FooterComponent,
    AcademicosComponent,
    InvestigacionComponent,
    BibliotecaComponent,
    RadioComponent,
    TvComponent,
    InicioComponent,
    InvilComponent,
    MonitoresComponent,
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
