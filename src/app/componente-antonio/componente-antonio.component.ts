import { Component } from '@angular/core';

@Component({
  selector: 'app-componente-antonio',
  standalone: false,
  
  templateUrl: './componente-antonio.component.html',
  styleUrl: './componente-antonio.component.css'
})
export class ComponenteAntonioComponent {
  isVisible: boolean = true;
  toggleParagraph(): void {
    this.isVisible = !this.isVisible;
  }

}
