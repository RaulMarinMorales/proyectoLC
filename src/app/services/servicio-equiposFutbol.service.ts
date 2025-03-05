import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs'; 
import { catchError } from 'rxjs/operators'; 

@Injectable({
  providedIn: 'root', // Hace que el servicio esté disponible en toda la aplicación
})
export class EquipoService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  // Método para obtener la lista de equipos
  obtenerEquipos(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/equipos`).pipe(
      catchError(this.handleError) // Manejo de errores global
    );
  }

  // Método para obtener los detalles de un equipo específico
  obtenerDetallesEquipo(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/equipo/${id}`).pipe(
      catchError(this.handleError) // Manejo de errores global
    );
  }

  // Método para eliminar un equipo por ID
  eliminarEquipo(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/equipo/${id}`).pipe(
      catchError(this.handleError) // Manejo de errores global
    );
  }

  // Método para editar un equipo
  editarEquipo(equipo: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/equipo/${equipo.id}`, equipo).pipe(
      catchError(this.handleError) // Manejo de errores
    );
  }

  // Método para registrar un nuevo equipo
  registrarEquipo(equipo: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/equipo`, equipo).pipe(
      catchError(this.handleError) // Manejo de errores global
    );
  }

  // Manejo de errores
  private handleError(error: any): Observable<never> {
    let errorMessage = 'Ocurrió un error desconocido';

    if (error.error instanceof ErrorEvent) {
      // Error de cliente
      errorMessage = `Error en la aplicación: ${error.error.message}`;
    } else {
      // Error del backend
      switch (error.status) {
        case 400:
          errorMessage = `Solicitud incorrecta: ${error.statusText}`;
          break;
        case 404:
          errorMessage = `No se encontró el recurso: ${error.statusText}`;
          break;
        case 500:
          errorMessage = `Error en el servidor: ${error.statusText}`;
          break;
        default:
          errorMessage = `Error del servidor: ${error.status} - ${error.statusText}`;
          break;
      }
    }

    console.error(errorMessage); // Log de error en consola
    return throwError(() => new Error(errorMessage)); // Lanzar el error
  }
}
