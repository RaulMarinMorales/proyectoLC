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
import { HttpClientModule } from '@angular/common/http';  // <-- IMPORTAR HttpClientModule
import { FormsModule } from '@angular/forms';

// Importamos FormularioRaulComponent para utilizarlo como componente standalone
import { FormularioRaulComponent } from './formulario-raul/formulario-raul.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponenteJuanComponent,
    ComponenteAntonioComponent,
    FooterComponenteComponent,
    FormularioBaloncestoComponent,
    HeaderComponent,
    CuerpoComponent,
    FormularioRaulComponent,
    FormularioNatacionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule // <-- AÑADIR HttpClientModule AQUÍ 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
