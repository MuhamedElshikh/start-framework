
import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
})
export class PortfolioComponent {
  imgs: string[] = [
    'assets/img/poert1.png',
    'assets/img/port2.png',
    'assets/img/port3.png',
    'assets/img/poert1.png',
    'assets/img/port2.png',
    'assets/img/port3.png',
  ];
  selectedImage!:string|null    
   openModal(image: string): void {
    this.selectedImage = image;
  }

  closeModal(): void {
    this.selectedImage = null;
  }
}


