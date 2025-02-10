import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario-baloncesto',
  standalone: false,
  
  templateUrl: './formulario-baloncesto.component.html',
  styleUrl: './formulario-baloncesto.component.css'
})
export class FormularioBaloncestoComponent {


  equipos3x3: any[] = []; 
  equipos5x5: any[] = []; 

  mostrarFormulario3x3: boolean = false;
  mostrarFormulario5x5: boolean = false;

  
  equipo: any = {
    nombreEquipo: '',
    localidad: '',
    direccion: '',
    capitan: '',
    jugadores: []
  };

 
  seleccionarModalidad(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    const modalidad = selectElement.value;

    if (modalidad === '3x3') {
      this.mostrarFormulario3x3 = true;
      this.mostrarFormulario5x5 = false;
    } else if (modalidad === '5x5') {
      this.mostrarFormulario3x3 = false;
      this.mostrarFormulario5x5 = true;
    } else {
      this.mostrarFormulario3x3 = false;
      this.mostrarFormulario5x5 = false;
    }
  }

inscribirEquipo3x3() {
  const equipo = {
    nombre: (document.getElementById('inputNombreEquipo') as HTMLInputElement).value,
    localidad: (document.getElementById('inputLocalidadEquipo') as HTMLInputElement).value,
    direccion: (document.getElementById('inputDireccionEquipo') as HTMLInputElement).value,
    modalidad: '3x3',
    capitan: (document.getElementById('inputNombreCapitan') as HTMLInputElement).value,
    jugadores: [
      (document.getElementById('inputNombreJug1') as HTMLInputElement).value,
      (document.getElementById('inputNombreJug2') as HTMLInputElement).value,
      (document.getElementById('inputNombreJug3') as HTMLInputElement).value,
    ]
  };

  this.equipos3x3.push(equipo);
  this.resetFormulario();
  alert('Equipo inscrito en 3x3');
}

inscribirEquipo5x5() {
  const equipo = {
    nombre: (document.getElementById('inputNombreEquipo') as HTMLInputElement).value,
    localidad: (document.getElementById('inputLocalidadEquipo') as HTMLInputElement).value,
    direccion: (document.getElementById('inputDireccionEquipo') as HTMLInputElement).value,
    modalidad: '5x5',
    capitan: (document.getElementById('inputNombreCapitan5') as HTMLInputElement).value,
    jugadores: [
      (document.getElementById('inputNombreJug15') as HTMLInputElement).value,
      (document.getElementById('inputNombreJug25') as HTMLInputElement).value,
      (document.getElementById('inputNombreJug35') as HTMLInputElement).value,
      (document.getElementById('inputNombreJug45') as HTMLInputElement).value,
      (document.getElementById('inputNombreJug55') as HTMLInputElement).value,
      (document.getElementById('inputNombreJug65') as HTMLInputElement).value,
      (document.getElementById('inputNombreJug75') as HTMLInputElement).value,
      (document.getElementById('inputNombreJug85') as HTMLInputElement).value,
      (document.getElementById('inputNombreJug95') as HTMLInputElement).value,
    ]
  };

  this.equipos5x5.push(equipo);
  this.resetFormulario();
  alert('Equipo inscrito en 5x5');
}

resetFormulario() {
  const inputs = document.querySelectorAll('input');
  inputs.forEach((input) => input.value = '');
  this.mostrarFormulario3x3 = false;
  this.mostrarFormulario5x5 = false;
}

mostrarArrays() {
  console.log('Equipos 3x3:', this.equipos3x3);
  console.log('Equipos 5x5:', this.equipos5x5);
}

}
