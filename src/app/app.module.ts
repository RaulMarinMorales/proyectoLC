import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponenteJuanComponent } from './componente-juan/componente-juan.component';
import { ComponenteRaulComponent } from './componente-raul/componente-raul.component';
import { ComponenteAntonioComponent } from './componente-antonio/componente-antonio.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponenteJuanComponent,
    ComponenteRaulComponent,
    ComponenteAntonioComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
