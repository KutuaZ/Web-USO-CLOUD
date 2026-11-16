import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common'; // Para *ngIf
import { FormsModule } from '@angular/forms';   // Para [(ngModel)]
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-compra',
  imports: [CommonModule, FormsModule],
  templateUrl: './compra.html',
  styleUrl: './compra.css'
})
export class Compra implements OnInit {
  private route = inject(ActivatedRoute);

  // Variables que reciben los datos enviados desde vps, aiops, bases-datos o contenedores
  plan = 'Plan cloud';
  category = 'Sin categoría seleccionada';
  description = '';
  price = '$0 /mes';

  // Variable de cuenta en resumen
  cuentaCliente = 'cliente@usocloud.demo';

  // Variables enlazadas a los inputs del formulario con [(ngModel)]
  nombreTitular = '';
  numeroTarjeta = '';
  vencimiento = '';
  cvv = '';

  ngOnInit() {
    const params = this.route.snapshot.queryParamMap;
    this.plan = params.get('plan') || 'Plan cloud';
    this.category = params.get('category') || 'Selecciona un servicio desde el catálogo';
    this.description = params.get('description') || '';
    this.price = params.get('price') || '$0 /mes';
  }
}
