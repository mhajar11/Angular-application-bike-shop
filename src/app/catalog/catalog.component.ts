import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../data.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [CommonModule], // pour utiliser CommonModule
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  bikes: any[] = [];
  accessories: any[] = [];

  constructor(private dataService: DataService,private cartService: CartService ) {}

  ngOnInit(): void {
    this.dataService.getBikes().subscribe({
      next: (data) => {
        console.log("Bikes loaded:", data); // Debugging pour savoir si la base marche (json)
        this.bikes = data;
      },
      error: (err) => console.error("Error loading bikes:", err)//afficher l'erreur
    });

    this.dataService.getAccessories().subscribe({
      next: (data) => {
        console.log("Accessories loaded:", data); // Debugging , pareil pour le tableau des accesoires
        this.accessories = data;
      },
      error: (err) => console.error("Error loading accessories:", err)// lire ou est l'erreur 
    });
  }
  addToCart(item: any) {
    this.cartService.addItem(item);// ajouter l'item à la cart
    console.log('Item added to cart:', item);
  }
  
}
