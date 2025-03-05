import { Component } from '@angular/core';
import { ServicioBaloncestoService } from '../services/servicio-baloncesto.service';

@Component({
  selector: 'app-formulario-baloncesto',
  templateUrl: './formulario-baloncesto.component.html',
  styleUrls: ['./formulario-baloncesto.component.css'],
  standalone: false
})
export class FormularioBaloncestoComponent {

  equipos3x3: any[] = [];
  equipos5x5: any[] = [];

  modalidadSeleccionada: string = 'seleccioneModalidad';
  maxJugadores: number = 0;

  jugadorPattern: string = "^[a-zA-Z ]{3,50}$"; // Validación de nombre

  equipo: any = {
    nombre_equipo: '',
    localidad: '',
    direccion: '',
    capitan: '',
    jugadores: []
  };

  constructor(private servicioBal: ServicioBaloncestoService) {}  

  seleccionarModalidad(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    this.modalidadSeleccionada = selectElement.value;
    this.maxJugadores = this.modalidadSeleccionada === '3x3' ? 4 : this.modalidadSeleccionada === '5x5' ? 9 : 0;
    
    // Resetear jugadores
    this.equipo.jugadores = [];
  }

  inscribirEquipo() {
    if (this.modalidadSeleccionada === '3x3') {
      this.inscribirEquipo3x3();
    } else if (this.modalidadSeleccionada === '5x5') {
      this.inscribirEquipo5x5();
    }
  }

  inscribirEquipo3x3() {
    const equipo = { ...this.equipo };
    equipo.jugadores = Array.isArray(equipo.jugadores) ? equipo.jugadores.map((j: { nombre: string }) => j.nombre) : [];

    console.log("Enviando equipo 3x3:", equipo); // Debug
    this.servicioBal.inscribirEquipo3x3(equipo).subscribe(
      response => {
        console.log(response);
        this.equipos3x3.push(equipo);
        this.resetFormulario();
        alert('Equipo inscrito en 3x3');
      },
      error => {
        console.error(error);
        alert('Error al inscribir equipo');
      }
    );
  }

  inscribirEquipo5x5() {
    const equipo = { ...this.equipo };
    equipo.jugadores = Array.isArray(equipo.jugadores) ? equipo.jugadores.map((j: { nombre: string }) => j.nombre) : [];

    console.log("Enviando equipo 5x5:", equipo); // Debug
    this.servicioBal.inscribirEquipo5x5(equipo).subscribe(
      response => {
        console.log(response);
        this.equipos5x5.push(equipo);
        this.resetFormulario();
        alert('Equipo inscrito en 5x5');
      },
      error => {
        console.error(error);
        alert('Error al inscribir equipo');
      }
    );
  }

  resetFormulario() {
    this.equipo = {
      nombre_equipo: '',
      localidad: '',
      direccion: '',
      capitan: '',
      jugadores: []
    };
    this.modalidadSeleccionada = 'seleccioneModalidad';
  }

  // Método para trackear los jugadores en el *ngFor
  trackByIndex(index: number): number {
    return index;
  }

  // Método para eliminar un jugador
  eliminarJugador(index: number) {
    this.equipo.jugadores.splice(index, 1);
  }

  // Método para agregar un jugador
  agregarJugador() {
    if (this.equipo.jugadores.length < this.maxJugadores) {
      this.equipo.jugadores.push({ nombre: '' });
    }
  }
}
