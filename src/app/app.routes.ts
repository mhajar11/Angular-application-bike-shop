import { Routes } from '@angular/router';
import { CatalogComponent } from './catalog/catalog.component';
import { CartComponent } from './cart/cart.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
  { path: '', component: CatalogComponent },  // Page Catalog
  { path: 'cart', component: CartComponent }, // Page du panier
  { path: 'contact', component: ContactComponent }, // Page contact
  { path: '**', redirectTo: '', pathMatch: 'full' } // si la route est incnnue on reedirige
];
