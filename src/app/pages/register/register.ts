import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Para *ngIf 
import { FormsModule } from '@angular/forms';   // [(ngModel)]
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {
  titulo = 'Registrar Cuenta';
  subtitulo = 'Por favor, completa el formulario para crear tu cuenta.';
  mostrarFuerzaPassword = false;

  // Variables enlazadas a los inputs del formulario con [(ngModel)]
  username = '';
  nombreCompleto = '';
  fechaNacimiento = '';
  telefono = '';
  direccion = '';
  email = '';
  password = '';
  confirmPassword = '';
}