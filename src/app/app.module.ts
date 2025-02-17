import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponenteJuanComponent } from './componente-juan/componente-juan.component';
import { ComponenteAntonioComponent } from './componente-antonio/componente-antonio.component';
import { CuerpoComponent } from './cuerpo/cuerpo.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// Importamos FormularioRaulComponent para utilizarlo como componente standalone
import { FormularioRaulComponent } from './formulario-raul/formulario-raul.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponenteJuanComponent,
    ComponenteAntonioComponent,
    CuerpoComponent
    // No declaramos FormularioRaulComponent aquí
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FormularioRaulComponent 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
