import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Para *ngIf y *ngFor 
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-perfil',
  imports: [CommonModule, RouterLink],
  templateUrl: './perfil.html',
  styleUrl: './perfil.css'
})
export class Perfil {
  // Datos estáticos de demostración en el .ts
  username = 'cliente.demo';
  email = 'cliente@usocloud.demo';
  rol = 'cliente';

  // Arreglo estático para mostrar servicios contratados en el bloque de suscripción
  serviciosActivos = [
    {
      nombre: 'USO VPS Docker Ready',
      categoria: 'Servidores VPS',
      precio: '$12.990 /mes',
      estado: 'Activo'
    }
  ];
}