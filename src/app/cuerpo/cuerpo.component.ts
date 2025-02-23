import { Component } from '@angular/core';

@Component({
  selector: 'app-cuerpo',
  standalone: false,
  
  templateUrl: './cuerpo.component.html',
  styleUrl: './cuerpo.component.css'
})
export class CuerpoComponent {
  torneos = [  
    {
      nombre: 'Torneo de Baloncesto 2024',
      fecha: '15 de Marzo, 2024',
      lugar: 'Madrid, España',
      descripcion: 'Un torneo de alto nivel con los mejores equipos.',
      imagen: 'assets/cartelTorneos/cartel_torneo_baloncesto.jpg',
      ruta: 'baloncesto' 
    },
    {
      nombre: 'Copa Nacional de Fútbol',
      fecha: '10 de Abril, 2024',
      lugar: 'Barcelona, España',
      descripcion: 'Compiten los mejores clubes nacionales.',
      imagen: 'assets/cartelTorneos/cartel_torneo_futbol.jpg',
      ruta: 'futbol'
    },
    {
      nombre: 'Campeonato de Natación',
      fecha: '22 de Mayo, 2024',
      lugar: 'Valencia, España',
      descripcion: 'Los nadadores más rápidos compiten por la gloria.',
      imagen: 'assets/cartelTorneos/cartel_torneo_natacion.jpg',
      ruta: 'natacion'
    }
  ];
  
}