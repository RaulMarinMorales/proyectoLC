import { Component } from '@angular/core';

@Component({
  selector: 'app-cuerpo',
  standalone: false,
  templateUrl: './cuerpo.component.html',
  styleUrls: ['./cuerpo.component.css']
})
export class CuerpoComponent {
  torneos = [  
    {
      nombre: 'Torneo de Baloncesto 2024',
      fecha: '15 de Marzo, 2024',
      lugar: 'Los Palacios y Villafranca, Sevilla',
      descripcion: 'Un torneo de alto nivel con los mejores equipos de baloncesto a nivel sevillano.',
      imagen: 'assets/cartelTorneos/cartel_torneo_baloncesto.jpg',
      ruta: 'baloncesto'  // Ruta asociada a este torneo
    },
    {
      nombre: 'Copa Palaciega de Fútbol',
      fecha: '10 de Abril, 2024',
      lugar: 'Los Palacios y Villafranca, Sevilla',
      descripcion: 'Compiten los mejores equipos de toda la comarca marismeña.',
      imagen: 'assets/cartelTorneos/cartel_torneo_futbol.jpg',
      ruta: 'futbol' // Ruta asociada a este torneo
    },
    {
      nombre: 'Campeonato de Natación Moñiguero',
      fecha: '22 de Mayo, 2024',
      lugar: 'Los Palacios y Villafranca, Sevilla',
      descripcion: 'Los nadadores más rápidos del pueblo compiten por ser el mejor.',
      imagen: 'assets/cartelTorneos/cartel_torneo_natacion.jpg',
      ruta: 'natacion' // Ruta asociada a este torneo
    }
  ];
}
