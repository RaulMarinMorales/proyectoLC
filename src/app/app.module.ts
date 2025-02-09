import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // 📌 IMPORTA ESTO

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponenteJuanComponent } from './componente-juan/componente-juan.component';
import { ComponenteRaulComponent } from './componente-raul/componente-raul.component';
import { ComponenteAntonioComponent } from './componente-antonio/componente-antonio.component';
import { HeaderComponent } from './header/header.component';
import { FormularioNatacionComponent } from './formulario-natacion/formulario-natacion.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponenteJuanComponent,
    ComponenteRaulComponent,
    ComponenteAntonioComponent,
    HeaderComponent,
    FormularioNatacionComponent
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
