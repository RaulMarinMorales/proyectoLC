import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CuerpoComponent } from './cuerpo/cuerpo.component';
import { FormularioBaloncestoComponent } from './formulario-baloncesto/formulario-baloncesto.component';
import { FormularioNatacionComponent } from './formulario-natacion/formulario-natacion.component';
import{ListarNadadoresComponent} from './listar-nadadores/listar-nadadores.component';
import { FormularioFutbolComponent } from './formulario-futbol/formulario-futbol.component';
import { ListaEquiposComponent } from './listar-equipos-futbol/listar-equipos-futbol.component';
import { ListarEquiposBaloncestoComponent } from './listar-equipos-baloncesto/listar-equipos-baloncesto.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: CuerpoComponent },  
  { path: 'baloncesto', component: FormularioBaloncestoComponent },
  { path: 'futbol', component: FormularioFutbolComponent },
  { path: 'natacion', component: FormularioNatacionComponent },
  {path: 'adminFutbol' , component: ListaEquiposComponent},
  {path: 'adminNatacion',component:ListarNadadoresComponent},
  {path: 'adminBaloncesto' , component: ListarEquiposBaloncestoComponent}
];
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
