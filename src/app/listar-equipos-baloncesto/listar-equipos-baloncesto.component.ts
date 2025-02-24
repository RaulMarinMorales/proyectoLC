import { Component, OnInit } from '@angular/core';
import { ServicioBaloncestoService } from '../services/servicio-baloncesto.service';

@Component({
  selector: 'app-listar-equipos-baloncesto',
  standalone: false,
  templateUrl: './listar-equipos-baloncesto.component.html',
  styleUrls: ['./listar-equipos-baloncesto.component.css']
})
export class ListarEquiposBaloncestoComponent implements OnInit {

  equiposBaloncesto: any[] = [];
  jugadoresVisibles: { [key: number]: boolean } = {};  // Para gestionar qué jugadores mostrar

  constructor(private equiposBaloncestoService: ServicioBaloncestoService) {}

  ngOnInit() {
    this.equiposBaloncestoService.obtenerEquipos().subscribe((data) => {
      this.equiposBaloncesto = data;
      console.log(this.equiposBaloncesto);  // Verifica que cada equipo tiene un array de jugadores
    });
  }

  obtenerEquipos() {
    this.equiposBaloncestoService.obtenerEquipos().subscribe((data: any[]) => {
      this.equiposBaloncesto = data;
    });
  }

  eliminarEquipo(id: number) {
    if (confirm('¿Estás seguro de que deseas eliminar este equipo?')) {
      this.equiposBaloncestoService.eliminarEquipo(id).subscribe(
        () => {
          this.equiposBaloncesto = this.equiposBaloncesto.filter(e => e.id !== id);
          delete this.jugadoresVisibles[id];  // Eliminar la visibilidad del equipo eliminado
        },
        (error) => {
          console.error('Error al eliminar el equipo', error);
        }
      );
    }
  }

  toggleJugadoresVisibles(id: number) {
    // Cambiar el estado de visibilidad de los jugadores
    this.jugadoresVisibles[id] = !this.jugadoresVisibles[id];
    console.log('Estado jugadores visibles para equipo', id, this.jugadoresVisibles[id]);
  }

  trackByIndex(index: number, item: any): number {
    return index;  // Usamos el índice para hacer un seguimiento de las filas
  }
}
