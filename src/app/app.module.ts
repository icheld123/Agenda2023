import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AcademicosComponent } from './feature/academicos/academicos.component';
import { BibliotecaComponent } from './feature/biblioteca/biblioteca.component';
import { FormularioComponent } from './feature/formulario/formulario.component';
import { InicioComponent } from './feature/inicio/inicio.component';
import { InvestigacionComponent } from './feature/investigacion/investigacion.component';
import { MonitoresComponent } from './feature/monitores/monitores.component';
import { OfertasLaboralesComponent } from './feature/ofertas-laborales/ofertas-laborales.component';
import { RadioComponent } from './feature/radio/radio.component';
import { TvComponent } from './feature/tv/tv.component';
import { SharedModule } from './shared/shared.module';
import { InvilComponent } from './feature/invil/invil.component';
import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { OfertaService } from './feature/shared/service/oferta.services';

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    AcademicosComponent,
    InvestigacionComponent,
    BibliotecaComponent,
    RadioComponent,
    TvComponent,
    InicioComponent,
    InvilComponent,
    MonitoresComponent,
    OfertasLaboralesComponent,
  ],
  imports: [
    CoreModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [OfertaService, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
