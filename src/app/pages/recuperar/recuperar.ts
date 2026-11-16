import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Para *ngIf 
import { FormsModule } from '@angular/forms';   // [(ngModel)]
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-recuperar',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './recuperar.html',
  styleUrl: './recuperar.css'
})
export class Recuperar {
  // Controla qué paso del formulario se ve en pantalla (1, 2 o 3)
  pasoActual = 1;
  mostrarFuerzaPassword = false;

  // Variables enlazadas a los inputs con [(ngModel)]
  correo = '';
  codigo = '';
  nuevaPassword = '';
  confirmarPassword = '';

  irAPaso(paso: number) {
    this.pasoActual = paso;
  }
}