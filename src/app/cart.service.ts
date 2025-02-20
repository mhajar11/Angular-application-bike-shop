import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {// classe pour le service de la carte 
  private items: any[] = [];

  addItem(item: any) {// ajouter item
    this.items.push(item);
  }

  removeItem(index: number) {// supp item
    this.items.splice(index, 1);
  }

  getItems() {
    return this.items;
  }
}
