import { Component } from '@angular/core';
import { NatacionService } from '../natacion.service'; // Importamos el servicio

@Component({
  selector: 'app-formulario-natacion',
  templateUrl: './formulario-natacion.component.html',
  styleUrls: ['./formulario-natacion.component.css'],
  standalone: false
})
export class FormularioNatacionComponent {
  equipoNatacion: string = '';
  nombreNadador: string = '';
  dniNadador: string = '';
  sexo: string = '';
  estilo: string = '';
  pruebaSeleccionada: string = '';

  constructor(private natacionService: NatacionService) { } // Inyectamos el servicio

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

  // Método para enviar el formulario al backend
  enviarFormulario(): void {
    const nuevoNadador = {
      equipo: this.equipoNatacion,
      nombre: this.nombreNadador,
      dni: this.dniNadador,
      sexo: this.sexo,
      estilo: this.estilo,
      prueba: this.pruebaSeleccionada
    };
    console.log('Datos enviados al backend:', nuevoNadador);

    // Llamamos al servicio para registrar el nadador
    this.natacionService.registrarNadador(nuevoNadador).subscribe(
      (response) => {
        console.log('Nadador registrado correctamente:', response);
        alert('Nadador registrado con éxito!');
        this.resetFormulario();
      },
      (error) => {
        console.error('Error al registrar el nadador:', error);
        alert('Hubo un error al registrar el nadador.');
      }
    );
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
