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
import { HttpClientModule } from '@angular/common/http';  
import { FormsModule } from '@angular/forms'; // Necesario para ngModel
import { FormularioFutbolComponent } from './formulario-futbol/formulario-futbol.component';
import { ListaEquiposComponent } from './listar-equipos-futbol/listar-equipos-futbol.component';

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
    FormularioFutbolComponent,
    ListaEquiposComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,  // Necesario para ngModel
    HttpClientModule,
    AppRoutingModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
