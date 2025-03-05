import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioBaloncestoService {
  private apiUrl = 'http://localhost:3000/api';  // URL de tu backend

  constructor(private http: HttpClient) { }

  // Método para inscribir un equipo en modalidad 3x3
  inscribirEquipo3x3(equipo: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/inscribir3x3`, equipo);  // Endpoint para inscribir en 3x3
  }

  // Método para inscribir un equipo en modalidad 5x5
  inscribirEquipo5x5(equipo: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/inscribir5x5`, equipo);  // Endpoint para inscribir en 5x5
  }

  // Método para obtener todos los equipos (de baloncesto)
  obtenerEquipos(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/equipos`);  // Endpoint para obtener todos los equipos
  }

  // Método para eliminar un equipo (por id)
  eliminarEquipo(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/equipos/${id}`);  // Endpoint para eliminar un equipo
  }
}
