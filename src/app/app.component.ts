import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';// pour le routing
import { HeaderComponent } from './header/header.component';// componenet header
import { FooterComponent } from './footer/footer.component';// componenet header



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,FooterComponent], // importer le route et les components 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bike-shop';
}
