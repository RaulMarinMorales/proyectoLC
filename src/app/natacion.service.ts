import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NatacionService {
  private apiUrl = 'http://localhost:3000'; // Asegúrate de que esta URL sea correcta

  constructor(private http: HttpClient) {}

  // Obtener lista de equipos de natación
  obtenerEquiposNatacion(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/equipos-natacion`);
  }

  // Obtener nadadores de un equipo específico
  obtenerNadadoresPorEquipo(equipo: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/nadadores-por-equipo?equipo=${equipo}`);
  }

  // Registrar un nuevo nadador
  registrarNadador(nadador: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/nadadores`, nadador);
  }

  // Obtener lista de nadadores
  obtenerNadadores(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/nadadores`);
  }

  // Obtener detalles de un nadador
  obtenerDetallesNadador(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/nadadores/${id}`);
  }

  // Editar nadador (con ID)
  editarNadador(id: number, nadadorActualizado: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/nadadores/${id}`, nadadorActualizado);
  }

  // Eliminar nadador
  eliminarNadador(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/nadadores/${id}`);
  }
}
