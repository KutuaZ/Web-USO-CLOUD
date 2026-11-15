import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  imports: [CommonModule, RouterLink],
  selector: 'app-navbar',
  styleUrl: './navbar.css',
  templateUrl: './navbar.html',
})
export class Navbar {

  menuServiciosAbierto = false;
  menuUsuarioAbierto = false;

  alternarServicios() {
    this.menuServiciosAbierto = !this.menuServiciosAbierto;
    this.menuUsuarioAbierto = false;
  }

  alternarUsuario() {
    this.menuUsuarioAbierto = !this.menuUsuarioAbierto;
    this.menuServiciosAbierto = false;
  }

}
