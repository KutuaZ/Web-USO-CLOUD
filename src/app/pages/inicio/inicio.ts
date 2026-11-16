import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Para *ngFor y *ngIf
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-inicio',
  imports: [CommonModule, RouterLink],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css'
})
export class Inicio {
  tituloHero = 'Infraestructura Cloud y Operaciones para Pymes';

  // Reemplaza la clase d-none del editor del carrusel usando *ngIf
  mostrarEditorCarrusel = false;

  // Diapositivas del carrusel Bootstrap
  slides = [
    { imagen: 'img/carousel1.jpg', alt: 'Infraestructura cloud' },
    { imagen: 'img/carousel2.jpg', alt: 'Servicios de bases de datos cloud' },
    { imagen: 'img/carousel3.jpg', alt: 'Contenedores y Kubernetes' }
  ];

  // Las 4 categorías principales
  categorias = [
    {
      titulo: '1. Servidores VPS',
      descripcion: 'Maquinas virtuales linux y windows de alto rendimiento con alamacenamiento NVMe.',
      imagen: 'img/vps.png',
      alt: 'Servidores VPS',
      ruta: '/vps'
    },
    {
      titulo: '2. Bases de Datos (DBaaS)',
      descripcion: 'Motores relacionales y en memoria listos para producción con respaldos automáticos.',
      imagen: 'img/bases-datos.png',
      alt: 'Bases de Datos',
      ruta: '/bases-datos'
    },
    {
      titulo: '3. Contenedores & K8s',
      descripcion: 'Despliega tus microservicios en Docker y clusters Kubernetes sin fricción.',
      imagen: 'img/contenedores.png',
      alt: 'Contenedores',
      ruta: '/contenedores'
    },
    {
      titulo: '4. Ciberseguridad & AIOps',
      descripcion: 'Protección WAF, respaldos y diagnóstico inteligente de logs mediante IA.',
      imagen: 'img/aiops.png',
      alt: 'Ciberseguridad & AIOps',
      ruta: '/aiops'
    }
  ];

  // Los 4 beneficios de USO CLOUD
  beneficios = [
    {
      titulo: 'Alto rendimiento',
      descripcion: 'Recursos optimizados y almacenamiento NVMe para que tus aplicaciones respondan rápidamente.',
      icono: 'bi-lightning-charge-fill'
    },
    {
      titulo: 'Seguridad integrada',
      descripcion: 'Protegemos tus servicios con respaldos, monitoreo y herramientas de seguridad confiables.',
      icono: 'bi-shield-check'
    },
    {
      titulo: 'Alta disponibilidad',
      descripcion: 'Mantenemos tu infraestructura activa para que tu negocio esté disponible cuando lo necesites.',
      icono: 'bi-clock-history'
    },
    {
      titulo: 'Soporte experto',
      descripcion: 'Te acompañamos con experiencia técnica para encontrar la mejor solución para tu proyecto.',
      icono: 'bi-headset'
    }
  ];

  // Los 3 pasos de la línea de tiempo
  pasosHistoria = [
    {
      numero: '01',
      titulo: 'La idea',
      descripcion: 'Escuchamos a pequeñas empresas que necesitaban crecer, pero no contaban con un equipo cloud dedicado.',
      icono: 'bi-lightbulb'
    },
    {
      numero: '02',
      titulo: 'El impulso',
      descripcion: 'Reunimos servidores, seguridad y automatización en un solo lugar, con planes simples y transparentes.',
      icono: 'bi-cloud-arrow-up'
    },
    {
      numero: '03',
      titulo: 'Lo que viene',
      descripcion: 'Seguimos construyendo una plataforma que acompaña tus proyectos desde la primera idea hasta su expansión.',
      icono: 'bi-rocket-takeoff'
    }
  ];
}