import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCard } from '../../shared/product-card/product-card';

@Component({
  selector: 'app-vps',
  imports: [CommonModule, ProductCard],
  templateUrl: './vps.html',
  styleUrl: './vps.css'
})
export class Vps {
  titulo = 'Categoria: Servidores VPS (Compute)';
  subtitulo = 'Instancias virtuales de baja latencia desplegadas en segundos para tus aplicaciones web y APIs.';
  categoria = 'Servidores VPS';

  productos = [
    {
      nombre: 'USO VPS Nano Linux',
      imagen: 'img/vpsplan1.png',
      alt: 'USO VPS Nano Linux',
      descripcion: 'Servidor virtual con 2 vCPU, 4 GB RAM DDR4 y 50 GB NVMe. Ideal para microservicios ligeros y entornos de prueba.',
      descripcionCorta: 'Servidor virtual con 2 vCPU, 4 GB RAM DDR4 y 50 GB NVMe.',
      precio: '$5.990 /mes',
      tieneDescuento: true,
      textoBadge: 'Descuento: 15% OFF'
    },
    {
      nombre: 'USO VPS Docker Ready',
      imagen: 'img/vpsplan2.png',
      alt: 'USO VPS Docker Ready',
      descripcion: 'Instancia optimizada con 4 vCPU, 8 GB RAM y motor Docker preinstalado lista para integración y despliegue continuo.',
      descripcionCorta: 'Instancia optimizada con Docker preinstalado.',
      precio: '$12.990 /mes',
      tieneDescuento: false,
      textoBadge: 'Sin descuento'
    },
    {
      nombre: 'USO Nodo Dedicado Ryzen',
      imagen: 'img/vpsplan3.png',
      alt: 'USO VPS Standard Linux',
      descripcion: 'Servidor virtual con 8 vCPU, 32 GB RAM DDR4 y 200 GB NVMe. Ideal para aplicaciones web de alto tráfico y bases de datos medianas.',
      descripcionCorta: 'Servidor virtual de alto rendimiento con 8 vCPU y 32 GB RAM.',
      precio: '$29.990 /mes',
      tieneDescuento: true,
      textoBadge: 'Descuento: 20% OFF'
    }
  ];
}