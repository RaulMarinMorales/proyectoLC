import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {
  private apiUrl = 'http://localhost:3000/equipo'; // URL del back

  constructor(private http: HttpClient) {}

  registrarEquipo(equipo: any): Observable<any> {
    return this.http.post(this.apiUrl, equipo);
  }
}
