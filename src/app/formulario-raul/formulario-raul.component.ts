import { Component } from '@angular/core';
<<<<<<< HEAD
import { EquipoService } from '../servicio-equipo.service'; 
=======
import { EquipoService } from '../servicio-equipo.service';
>>>>>>> develop-raul

@Component({
  selector: 'app-formulario-raul',
  templateUrl: './formulario-raul.component.html',
  styleUrls: ['./formulario-raul.component.css'],
})
export class FormularioRaulComponent {
  equipo = {
    nombre: '',
    entrenador: '',
    email: '',
    telefono: '',
    categoria: '',
    jugadores: ['']
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

  constructor(private equipoService: EquipoService) {}

  agregarJugador() {
    if (this.equipo.jugadores.length < 15) {
      this.equipo.jugadores = [...this.equipo.jugadores, '']; // Clonar el array para que Angular detecte el cambio
    }
  }

  eliminarJugador(index: number) {
    if (this.equipo.jugadores.length > 1) {
      this.equipo.jugadores.splice(index, 1);
      this.equipo.jugadores = [...this.equipo.jugadores]; // Asegurar que Angular detecta el cambio
    }
  }

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

  validarFormulario(): boolean {
    if (!this.equipo.nombre || !this.equipo.entrenador || !this.equipo.email || !this.equipo.telefono || !this.equipo.categoria) {
      this.errorMessage = 'Por favor, complete todos los campos';
      this.successMessage = '';
      return false;
    }
    return true;
  }
}
