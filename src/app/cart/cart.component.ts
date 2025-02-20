import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importer CommonModule
import { CartService } from '../cart.service';// et la carte servoce

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items: any[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.items = this.cartService.getItems();
  }

  removeItem(index: number) {
    this.cartService.removeItem(index);// pour supprimer item
    this.items = this.cartService.getItems(); // Mise à jour de la liste après suppression
  }
}
