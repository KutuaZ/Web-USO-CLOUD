import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

export interface Product {
  nombre: string;
  imagen: string;
  alt: string;
  descripcion: string;
  descripcionCorta: string;
  precio: string;
  tieneDescuento: boolean;
  textoBadge: string;
}

@Component({
  selector: 'app-product-card',
  imports: [CommonModule, RouterLink],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css'
})
export class ProductCard {
  @Input({ required: true }) product!: Product;
  @Input({ required: true }) category = '';
  @Input() buttonText = 'Solicitar servicio';
}
