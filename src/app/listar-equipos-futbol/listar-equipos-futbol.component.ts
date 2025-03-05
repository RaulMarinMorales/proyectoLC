import { Component, OnInit } from '@angular/core';
import { EquipoService } from '../services/servicio-equiposFutbol.service';

@Component({
  selector: 'app-listar-equipos-futbol',
  templateUrl: './listar-equipos-futbol.component.html',
  styleUrls: ['./listar-equipos-futbol.component.css'],
  standalone: false
})
export class ListaEquiposComponent implements OnInit {
  equipos: any[] = []; // Array para almacenar la lista de equipos
  equipoSeleccionado: number | null = null; // ID del equipo seleccionado
  equipoDetalles: any = null; // Detalles del equipo seleccionado
  editando: boolean = false; // Controla el estado de edición del equipo

  constructor(private equipoService: EquipoService) {}

  ngOnInit(): void {
    this.cargarEquipos(); // Cargar la lista de equipos al iniciar el componente
  }

  // Método para cargar la lista de equipos desde el servicio
  cargarEquipos(): void {
    this.equipoService.obtenerEquipos().subscribe((data: any[]) => {
      this.equipos = data; // Asignamos los equipos a la propiedad equipos
    });
  }

  // Método para cargar los detalles del equipo seleccionado
  cargarDetallesEquipo(): void {
    if (this.equipoSeleccionado !== null) {
      this.equipoService.obtenerDetallesEquipo(this.equipoSeleccionado).subscribe((data: any) => {
        this.equipoDetalles = data; // Asignamos los detalles del equipo a la propiedad equipoDetalles
      });
    }
  }

  // Método para eliminar un equipo
  eliminarEquipo(): void {
    if (this.equipoSeleccionado !== null && confirm('¿Seguro que quieres eliminar este equipo?')) {
      this.equipoService.eliminarEquipo(this.equipoSeleccionado).subscribe(() => {
        alert('Equipo eliminado correctamente');
        this.cargarEquipos(); // Recargamos la lista de equipos
        this.equipoDetalles = null; // Limpiamos los detalles del equipo
        this.equipoSeleccionado = null; // Limpiamos la selección del equipo
      });
    }
  }

  // Habilita la edición de los detalles del equipo
  habilitarEdicion(): void {
    this.editando = true; // Cambiamos el estado a "editando"
  }

  // Método para guardar los cambios en el equipo
  guardarCambios(): void {
    if (this.equipoDetalles) {
      this.equipoService.editarEquipo(this.equipoDetalles).subscribe(() => {
        alert('Equipo actualizado correctamente');
        this.cargarEquipos(); // Recargamos la lista de equipos
        this.editando = false; // Deshabilitamos la edición
      });
    }
  }

  // Método para cancelar la edición y restablecer los detalles del equipo
  cancelarEdicion(): void {
    this.cargarDetallesEquipo(); // Restablecemos los detalles originales del equipo
    this.editando = false; // Deshabilitamos el modo de edición
  }
}
