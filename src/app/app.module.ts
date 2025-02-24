import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponenteJuanComponent } from './componente-juan/componente-juan.component';
import { ComponenteAntonioComponent } from './componente-antonio/componente-antonio.component';
import { FooterComponenteComponent } from './footer-componente/footer-componente.component';
import { FormularioBaloncestoComponent } from './formulario-baloncesto/formulario-baloncesto.component';
import { FormularioNatacionComponent } from './formulario-natacion/formulario-natacion.component';
import { HeaderComponent } from './header/header.component';
import { CuerpoComponent } from './cuerpo/cuerpo.component';
import { HttpClient, HttpClientModule } from '@angular/common/http'; 
import { FormsModule } from '@angular/forms';
import { ListarNadadoresComponent } from './listar-nadadores/listar-nadadores.component';
import { FormularioFutbolComponent } from './formulario-futbol/formulario-futbol.component';
import { ListaEquiposComponent } from './listar-equipos-futbol/listar-equipos-futbol.component';
import { ListarEquiposBaloncestoComponent } from './listar-equipos-baloncesto/listar-equipos-baloncesto.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponenteJuanComponent,
    ComponenteAntonioComponent,
    FooterComponenteComponent,
    FormularioBaloncestoComponent,
    FormularioNatacionComponent,
    HeaderComponent,
    CuerpoComponent,
    FormularioNatacionComponent,
    ListarNadadoresComponent,
    FormularioFutbolComponent,
    ListaEquiposComponent,
    FormularioNatacionComponent,
    ListarEquiposBaloncestoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,  
    HttpClientModule,
    AppRoutingModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
