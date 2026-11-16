import { Component } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Navbar } from './shared/navbar/navbar';
import { Footer } from './shared/footer/footer';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, Navbar, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  mostrarNavbar = true;

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const rutaActual = event.urlAfterRedirects.split('?')[0];
        const rutasSinNavbar = ['/recuperar', '/compra', '/perfil'];
        this.mostrarNavbar = !rutasSinNavbar.includes(rutaActual);
      }
    });
  }
}