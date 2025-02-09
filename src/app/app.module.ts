import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//la siguiente linea es para poder usar ngmodel en el formulario raul
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponenteJuanComponent } from './componente-juan/componente-juan.component';
import { ComponenteAntonioComponent } from './componente-antonio/componente-antonio.component';
import { CuerpoComponent } from './cuerpo/cuerpo.component';
import { FormularioRaulComponent } from './formulario-raul/formulario-raul.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponenteJuanComponent,
    ComponenteAntonioComponent,
    CuerpoComponent,
    FormularioRaulComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
