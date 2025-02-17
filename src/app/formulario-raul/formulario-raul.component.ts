import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario-raul',
  standalone: false,
  
  templateUrl: './formulario-raul.component.html',
  styleUrl: './formulario-raul.component.css'
})


//js del componente de formulario de raul


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

  registrarEquipo() {
    console.log('Equipo Registrado:', this.equipo);
    alert('Equipo registrado con éxito!');
  }

  actualizarJugador(value: string, index: number): void {
    this.equipo.jugadores[index] = value;
  }
  
  obtenerIndiceJugador(index: number, jugador: string): number {
    return index; 
  }
  
}
