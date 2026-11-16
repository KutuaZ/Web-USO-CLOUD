import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationEnd, Router, RouterLink } from '@angular/router';

@Component({
  imports: [CommonModule, RouterLink],
  selector: 'app-navbar',
  styleUrl: './navbar.css',
  templateUrl: './navbar.html',
})
export class Navbar {

  mostrarVolverInicio = false;
  menuServiciosAbierto = false;
  menuUsuarioAbierto = false;

  constructor(private router: Router) {
    this.mostrarVolverInicio = this.router.url !== '/';
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.mostrarVolverInicio = event.urlAfterRedirects !== '/';
      }
    });
  }

  alternarServicios() {
    this.menuServiciosAbierto = !this.menuServiciosAbierto;
    this.menuUsuarioAbierto = false;
  }

  alternarUsuario() {
    this.menuUsuarioAbierto = !this.menuUsuarioAbierto;
    this.menuServiciosAbierto = false;
  }

}
