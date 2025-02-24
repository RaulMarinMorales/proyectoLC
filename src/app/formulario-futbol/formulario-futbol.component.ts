import { Component } from '@angular/core';
import { EquipoService } from '../servicio-equipo.service';

@Component({
  selector: 'app-formulario-futbol',
  templateUrl: './formulario-futbol.component.html',
  styleUrls: ['./formulario-futbol.component.css'],
  standalone: false
})
export class FormularioFutbolComponent {
  equipo = {
    nombre: '',
    entrenador: '',
    email: '',
    telefono: '',
    categoria: '',
    jugadores: [''] // Inicializamos con un jugador vacío
  };

  categorias: string[] = [
    'Prebenjamín',
    'Benjamín',
    'Alevín',
    'Infantil',
    'Cadete',
    'Juvenil',
    'Senior'
  ];

  errorMessage: string = '';
  successMessage: string = '';

  // Expresiones regulares para validar campos
  emailPattern = '[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$';  // Para validar el email
  telefonoPattern = '^[0-9]{9}$';  // Para validar el teléfono (9 dígitos)
  jugadorPattern = '^[a-zA-ZáéíóúÁÉÍÓÚ]+([ ]?[a-zA-ZáéíóúÁÉÍÓÚ]+)*$'; // Nombre y dos apellidos

  constructor(private equipoService: EquipoService) {}

  // Agregar un nuevo jugador al equipo
  agregarJugador() {
    if (this.equipo.jugadores.length < 15) {
      this.equipo.jugadores.push(''); // Solo empujamos el nuevo jugador
    }
  }

  // Eliminar un jugador de la lista
  eliminarJugador(index: number) {
    if (this.equipo.jugadores.length > 1) {
      this.equipo.jugadores.splice(index, 1); // Eliminamos el jugador del índice dado
    }
  }

  // Registrar el equipo, solo si el formulario es válido
  registrarEquipo() {
    if (this.validarFormulario()) {
      this.equipoService.registrarEquipo(this.equipo).subscribe(
        (response) => {
          this.successMessage = 'El equipo ha sido registrado con éxito.';
          this.errorMessage = '';
        },
        (error) => {
          this.errorMessage = 'Hubo un error al registrar el equipo. Intenta nuevamente.';
          this.successMessage = '';
        }
      );
    }
  }

  // Validar todos los campos del formulario
  validarFormulario(): boolean {
    // Comprobamos que todos los campos requeridos estén completos
    if (!this.equipo.nombre || !this.equipo.entrenador || !this.equipo.email || !this.equipo.telefono || !this.equipo.categoria) {
      this.errorMessage = 'Por favor, complete todos los campos';
      this.successMessage = '';
      return false;
    }

    // Validamos el correo electrónico con una expresión regular
    const emailRegex = new RegExp(this.emailPattern);
    if (!emailRegex.test(this.equipo.email)) {
      this.errorMessage = 'Por favor, ingrese un correo electrónico válido.';
      this.successMessage = '';
      return false;
    }

    // Validamos el teléfono
    const telefonoRegex = new RegExp(this.telefonoPattern);
    if (!telefonoRegex.test(this.equipo.telefono)) {
      this.errorMessage = 'El teléfono debe contener 9 caracteres numéricos.';
      this.successMessage = '';
      return false;
    }

    // Validamos los jugadores: que tengan al menos nombre y dos apellidos
    for (let jugador of this.equipo.jugadores) {
      const jugadorRegex = new RegExp(this.jugadorPattern);
      if (!jugadorRegex.test(jugador)) {
        this.errorMessage = 'Cada jugador debe tener un nombre y dos apellidos.';
        this.successMessage = '';
        return false;
      }
    }

    return true;
  }

  // Método para mejorar la eficiencia de *ngFor
  trackByIndex(index: number, jugador: string): number {
    return index;
  }
}
