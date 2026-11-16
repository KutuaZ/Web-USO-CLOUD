import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-aiops',
  imports: [CommonModule, RouterLink],
  templateUrl: './aiops.html',
  styleUrl: './aiops.css'
})
export class Aiops {
  titulo = 'Categoría: Ciberseguridad y Monitoreo AIOps';
  subtitulo = 'Blindaje perimetral para tus servicios y análisis automatizado de incidentes con Inteligencia Artificial.';
  categoria = 'Ciberseguridad y AIOps';

  productos = [
    {
      nombre: 'USO Firewall WAF + Anti-DDoS',
      imagen: 'img/aiops1.jpg',
      alt: 'USO Firewall WAF',
      descripcion: 'Mitigación automática de ataques de denegación de servicio y filtrado de inyecciones SQL y XSS en tiempo real.',
      descripcionCorta: 'Protección WAF y mitigación Anti-DDoS en tiempo real.',
      precio: '$7.990 /mes',
      tieneDescuento: false,
      textoBadge: 'Sin descuento'
    },
    {
      nombre: 'USO Monitor IA Log Analyzer',
      imagen: 'img/aiops2.jpg',
      alt: 'USO Monitor IA Log Analyzer',
      descripcion: 'Agente de Inteligencia Artificial que inspecciona los logs de tus servidores, detecta caídas y sugiere la solución exacta.',
      descripcionCorta: 'Análisis inteligente de logs y detección de incidentes.',
      precio: '$9.990 /mes',
      tieneDescuento: true,
      textoBadge: 'Descuento: 30% OFF'
    },
    {
      nombre: 'USO Disaster Recovery Backup',
      imagen: 'img/aiops3.jpg',
      alt: 'USO Disaster Recovery',
      descripcion: 'Replicación continua de tus servidores e imágenes en múltiples zonas geográficas con recuperación en 1 minuto.',
      descripcionCorta: 'Respaldo y recuperación continua de tus servicios.',
      precio: '$5.490 /mes',
      tieneDescuento: false,
      textoBadge: 'Sin descuento'
    }
  ];
}