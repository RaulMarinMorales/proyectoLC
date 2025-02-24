import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root', // Hace que el servicio esté disponible en toda la aplicación
})
export class EquipoService {
  private apiUrl = 'http://localhost:3000'; // URL base de la API

  constructor(private http: HttpClient) {}

  // Método para obtener la lista de equipos
  obtenerEquipos(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/equipos`);
  }

  // Método para obtener los detalles de un equipo específico
  obtenerDetallesEquipo(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/equipo/${id}`);
  }

  // Método para eliminar un equipo por ID
  eliminarEquipo(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/equipo/${id}`);
  }

  // Método para editar un equipo
  editarEquipo(equipo: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/equipo/${equipo.id}`, equipo);
  }

  // Método para registrar un nuevo equipo
  registrarEquipo(equipo: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/equipo`, equipo); // Ajusta la ruta si es necesario
  }
}
