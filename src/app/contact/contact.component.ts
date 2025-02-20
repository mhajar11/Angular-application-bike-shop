import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule], 
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {// formulaire simple et basique
  
  name: string = '';
  email: string = '';
  message: string = '';

  onSubmit() {
    console.log('Contact form submitted:');
    console.log('Name:', this.name);
    console.log('Email:', this.email);
    console.log('Message:', this.message);
// j'ai pas le temps pour ajouter champs obligatoires comme dans le td 

    this.name = '';
    this.email = '';
    this.message = '';
  }
}
