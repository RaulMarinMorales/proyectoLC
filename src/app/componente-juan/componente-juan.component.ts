import { Component } from '@angular/core';

@Component({
  selector: 'app-componente-juan',
  standalone: false,
  
  templateUrl: './componente-juan.component.html',
  styleUrl: './componente-juan.component.css'
})
export class ComponenteJuanComponent {

  animales = ["Perro", "Gato", "Pájaro", "Tiburón", "Cocodrilo", "Caballo"];

  divMostrado = false;

  mostrarDiv() {
    this.divMostrado = true;
  }
}
