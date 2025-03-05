import { Component, OnInit } from '@angular/core';
import { NatacionService } from '../services/natacion.service';

@Component({
  selector: 'app-listar-nadadores',
  templateUrl: './listar-nadadores.component.html',
  styleUrls: ['./listar-nadadores.component.css'],
  standalone: false
})
export class ListarNadadoresComponent implements OnInit {
  equipos: any[] = [];
  equipoSeleccionado: string | null = null;
  nadadores: any[] = [];
  nadadorDetalles: any = null;
  editando: boolean = false;

  constructor(private natacionService: NatacionService) {}

  ngOnInit(): void {
    this.cargarEquipos();
  }

  cargarEquipos(): void {
    this.natacionService.obtenerEquiposNatacion().subscribe({
      next: (data: any[]) => {
        this.equipos = data;
      },
      error: (err) => {
        console.error('Error al obtener equipos', err);
      }
    });
  }

  cargarNadadores(): void {
    if (this.equipoSeleccionado) {
      this.natacionService.obtenerNadadoresPorEquipo(this.equipoSeleccionado).subscribe({
        next: (data: any[]) => {
          this.nadadores = data;
          this.nadadorDetalles = null; // Limpiamos los detalles al seleccionar un equipo
        },
        error: (err) => {
          console.error('Error al obtener nadadores', err);
        }
      });
    }
  }

  seleccionarNadador(nadador: any): void {
    this.nadadorDetalles = { ...nadador };
  }

  eliminarNadador(id: string): void {
    if (confirm('¿Seguro que quieres eliminar este nadador?')) {
      this.natacionService.eliminarNadador(id).subscribe({
        next: () => {
          alert('Nadador eliminado correctamente');
          this.cargarNadadores();
          this.nadadorDetalles = null;
        },
        error: (err) => {
          console.error('Error al eliminar nadador', err);
        }
      });
    }
  }

  habilitarEdicion(): void {
    this.editando = true;
  }

  guardarCambios(): void {
    if (this.nadadorDetalles && this.nadadorDetalles.id) {
      this.natacionService.editarNadador(this.nadadorDetalles.id, this.nadadorDetalles).subscribe({
        next: () => {
          alert('Nadador actualizado correctamente');
          this.cargarNadadores();
          this.editando = false;
        },
        error: (err) => {
          console.error('Error al actualizar nadador', err);
        }
      });
    }
  }

  cancelarEdicion(): void {
    this.nadadorDetalles = null;
    this.editando = false;
  }
}
