import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario-natacion',
  standalone: false,

  templateUrl: './formulario-natacion.component.html',
  styleUrl: './formulario-natacion.component.css'
})
export class FormularioNatacionComponent {
  equipoNatacion: string = '';
  nombreNadador: string = '';
  dniNadador: string = '';
  sexo: string = '';
  estilo: string = '';
  pruebaSeleccionada: string = '';

  // Array para almacenar los nadadores
  nadadores: any[] = [];

  // Definir las pruebas según el estilo
  pruebasNatacion: { [key: string]: string[] } = {
    libre: ['50m', '100m', '200m', '400m', '1500m'],
    espalda: ['50m', '100m', '200m'],
    braza: ['50m', '100m', '200m'],
    mariposa: ['50m', '100m', '200m']
  };
  getPruebasDisponibles(): string[] {
    return this.estilo ? this.pruebasNatacion[this.estilo] : [];
  }
  // Método para manejar el envío del formulario
  enviarFormulario(): void {
    // Crear el objeto con los datos del nadador
    const nuevoNadador = {
      equipo: this.equipoNatacion,
      nombre: this.nombreNadador,
      dni: this.dniNadador,
      sexo: this.sexo,
      estilo: this.estilo,
      prueba: this.pruebaSeleccionada
    };
    // Agregar el nuevo nadador al array
    this.nadadores.push(nuevoNadador);

    // Mostrar los nadadores almacenados en la consola
    console.log('Nadadores registrados:', this.nadadores);
  }
  // Método para resetear los campos del formulario
  resetFormulario(): void {
    this.equipoNatacion = '';
    this.nombreNadador = '';
    this.dniNadador = '';
    this.sexo = '';
    this.estilo = '';
    this.pruebaSeleccionada = '';
  }

}
