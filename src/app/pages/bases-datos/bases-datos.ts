import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-bases-datos',
  imports: [CommonModule, RouterLink],
  templateUrl: './bases-datos.html',
  styleUrl: './bases-datos.css'
})
export class BasesDatos {
  titulo = 'Categoría: Bases de Datos Gestionadas (DBaaS)';
  subtitulo = 'Motores de datos configurados con alta disponibilidad, encriptación y backups automáticos diarios.';
  categoria = 'Bases de Datos';

  productos = [
    {
      nombre: 'USO Cluster PostgreSQL',
      imagen: 'img/db1.png',
      alt: 'USO Cluster PostgreSQL',
      descripcion: 'Base de datos relacional escalable con replicación automática y snapshots diarios incluidos sin costo adicional.',
      descripcionCorta: 'Base de datos relacional con replicación y snapshots diarios.',
      precio: '$8.990 /mes',
      tieneDescuento: false,
      textoBadge: 'Sin descuento'
    },
    {
      nombre: 'USO Motor Oracle / SQL Pro',
      imagen: 'img/db2.png',
      alt: 'USO Motor Transaccional Pro',
      descripcion: 'Instancia de alto rendimiento para sistemas empresariales, ERPs y aplicaciones bancarias con soporte transaccional.',
      descripcionCorta: 'Instancia de alto rendimiento para sistemas empresariales.',
      precio: '$19.990 /mes',
      tieneDescuento: true,
      textoBadge: 'Descuento: 10% OFF'
    },
    {
      nombre: 'USO Redis In-Memory Cache',
      imagen: 'img/db3.png',
      alt: 'USO Redis In-Memory',
      descripcion: 'Almacenamiento clave-valor ultrarrápido en memoria RAM para acelerar consultas de APIs y manejo de sesiones.',
      descripcionCorta: 'Almacenamiento en memoria para acelerar tus APIs.',
      precio: '$4.990 /mes',
      tieneDescuento: false,
      textoBadge: 'Sin descuento'
    }
  ];
}