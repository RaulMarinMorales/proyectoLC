import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioBaloncestoService {
  private apiUrl = 'http://localhost:3000/api';  // URL de tu backend

  constructor(private http: HttpClient) { }

  // Método para inscribir un equipo en 3x3
  inscribirEquipo3x3(equipo: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/inscribir3x3`, equipo);
  }

  // Método para inscribir un equipo en 5x5
  inscribirEquipo5x5(equipo: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/inscribir5x5`, equipo);
  }

  // Método para obtener todos los equipos
  obtenerEquipos(): Observable<any> {
    return this.http.get(`${this.apiUrl}/equipos`);
  }
}
