import { Component } from '@angular/core';
import { EquipoService } from '../servicio-equipo.service'; 
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-formulario-raul',
  templateUrl: './formulario-raul.component.html',
  styleUrls: ['./formulario-raul.component.css'],
  standalone: false,
  imports: [CommonModule, FormsModule]
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

  // Categorías por edad
  categorias = [
    'Prebenjamín', 
    'Benjamín', 
    'Alevín', 
    'Infantil', 
    'Cadete', 
    'Juvenil', 
    'Senior'
  ];

  constructor(private equipoService: EquipoService) {}  // Inyectamos el servicio

  agregarJugador() {
    if (this.equipo.jugadores.length < 15) {
      this.equipo.jugadores.push('');
    }
  }

  eliminarJugador(index: number) {
    if (this.equipo.jugadores.length > 1) {
      this.equipo.jugadores.splice(index, 1);
    }
  }

  // Método para registrar el equipo
  registrarEquipo() {
    this.equipoService.registrarEquipo(this.equipo).subscribe(
      (response) => {
        console.log('Equipo Registrado:', response);
        alert('Equipo registrado con éxito!');
      },
      (error) => {
        console.error('Error al registrar el equipo:', error);
        alert('Hubo un error al registrar el equipo.');
      }
    );
  }

  actualizarJugador(value: string, index: number): void {
    this.equipo.jugadores[index] = value;
  }
  
  obtenerIndiceJugador(index: number, jugador: string): number {
    return index; 
  }
}
