import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  cedula = '';
  tipo = '';
  tipoStr = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.cedula = sessionStorage.getItem('cedula') || '';
    this.tipo = sessionStorage.getItem('tipo') || '';
    switch (this.tipo) {
      case 'A':
        this.tipoStr = 'Administrador';
        break;
      case 'C':
        this.tipoStr = 'Cliente';
        break;
      case 'V':
        this.tipoStr = 'Ventas';
        break;
      default:
        this.tipoStr = '';
        break;
    }

    this.router.navigate(['']);
  }

  logout() {
    this.cedula = '';
    this.tipo = '';
    sessionStorage.removeItem('cedula');
    sessionStorage.removeItem('tipo');
    window.location.reload();
  }
}
