import { Component } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { Navbar } from './shared/navbar/navbar';
import { Footer } from './shared/footer/footer';
import { CommonModule } from '@angular/common';

@Component({
  imports: [CommonModule, RouterOutlet, Navbar, Footer],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  mostrarNavbar = true;
  mostrarFooter = true;
  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {

        const rutasSinNavbar = ['/login', '/recuperar', '/compra', '/perfil'];
        this.mostrarNavbar = !rutasSinNavbar.includes(event.urlAfterRedirects);
        this.mostrarFooter = !rutasSinNavbar.includes(event.urlAfterRedirects);
      }
    });
  }
}
