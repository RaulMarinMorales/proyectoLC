import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CuerpoComponent } from './cuerpo/cuerpo.component';
import { FormularioBaloncestoComponent } from './formulario-baloncesto/formulario-baloncesto.component';
import { FormularioRaulComponent } from './formulario-raul/formulario-raul.component';
import { FormularioNatacionComponent } from './formulario-natacion/formulario-natacion.component';
import { ListarEquiposBaloncestoComponent } from './listar-equipos-baloncesto/listar-equipos-baloncesto.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: CuerpoComponent},
  { path: 'baloncesto', component: FormularioBaloncestoComponent},
  { path: 'futbol', component: FormularioRaulComponent},
  { path: 'natacion', component: FormularioNatacionComponent},
  {path: 'adminBaloncesto' , component: ListarEquiposBaloncestoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
