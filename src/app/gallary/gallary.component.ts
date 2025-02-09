import { Component } from '@angular/core';
import { RecommendedComponent } from '../recommended/recommended.component';

interface Prudct { name:string , price:number, cat : string , img:string}
@Component({
  selector: 'app-gallary',
  standalone: true,
  imports: [RecommendedComponent],
  templateUrl: './gallary.component.html',
  styleUrl: './gallary.component.css',
})
export class GallaryComponent {
  prudctList: Prudct[] = [
    {
      name: 'sum',
      price: 2000,
      cat: 'mobile',
      img: 'assets/img/mob1.webp',
    },
    {
      name: 'sum',
      price: 2000,
      cat: 'mobile',
      img: 'assets/img/mop2.jpg',
    },
    {
      name: 'sum',
      price: 2000,
      cat: 'mobile',
      img: 'assets/img/mob3.jpeg',
    },
    {
      name: 'asus',
      price: 2000,
      cat: 'laptob',
      img: 'assets/img/lap1.webp',
    },
    {
      name: 'logen',
      price: 20000,
      cat: 'laptob',
      img: 'assets/img/lap2.webp',
    },
    {
      name: 'hb',
      price: 50000,
      cat: 'laptop',
      img: 'assets/img/lap3.jpg',
    },
  ];
}
