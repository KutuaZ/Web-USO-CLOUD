import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCard } from '../../shared/product-card/product-card';

@Component({
  selector: 'app-contenedores',
  imports: [CommonModule, ProductCard],
  templateUrl: './contenedores.html',
  styleUrl: './contenedores.css'
})
export class Contenedores {
  titulo = 'Categoría: Contenedores y Kubernetes';
  subtitulo = 'Orquestación moderna para microservicios en Spring Boot, .NET, Python o Node.js listos para escalar.';
  categoria = 'Contenedores';

  productos = [
    {
      nombre: 'USO App Container Individual',
      imagen: 'img/contenedor1.png',
      alt: 'USO App Container',
      descripcion: 'Conecta tu repositorio de GitHub y despliega tu contenedor Docker en 1 clic con certificado SSL automático.',
      descripcionCorta: 'Despliega tu contenedor Docker con SSL automático.',
      precio: '$3.990 /mes',
      tieneDescuento: true,
      textoBadge: 'Descuento: 25% OFF'
    },
    {
      nombre: 'USO Kubernetes Starter',
      imagen: 'img/contenedor2.png',
      alt: 'USO Cluster Kubernetes',
      descripcion: 'Cluster gestionado con 3 nodos trabajadores, balanceador de carga incluido y auto-escalado horizontal de pods.',
      descripcionCorta: 'Cluster gestionado con auto-escalado horizontal.',
      precio: '$24.990 /mes',
      tieneDescuento: false,
      textoBadge: 'Sin descuento'
    },
    {
      nombre: 'USO Private Registry',
      imagen: 'img/contenedor3.png',
      alt: 'USO Container Registry',
      descripcion: 'Repositorio privado de imágenes Docker con escaneo automático de vulnerabilidades en cada subida.',
      descripcionCorta: 'Repositorio privado de imágenes Docker con escaneo automático.',
      precio: '$2.990 /mes',
      tieneDescuento: false,
      textoBadge: 'Sin descuento'
    }
  ];
}