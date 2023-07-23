import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/user.model';
import { Router } from '@angular/router';
import { Session } from '../model/session.model';

@Injectable({
  providedIn: 'root',
})
export class SessionService {

  session: Session = new Session('', '', '', '');

  constructor(private router: Router) {}
  
  ngOnInit(): void {
  }

  getSession(): Session{
    this.session.id = sessionStorage.getItem('idUsuario') || '';
    this.session.cedula = sessionStorage.getItem('cedula') || '';
    this.session.tipo = sessionStorage.getItem('tipo') || '';
    switch (this.session.tipo) {
      case 'A':
        this.session.tipoStr = 'Administrador';
        break;
      case 'C':
        this.session.tipoStr = 'Cliente';
        break;
      case 'V':
        this.session.tipoStr = 'Ventas';
        break;
      default:
        this.session.tipoStr = '';
        break;
    }

    return this.session;
  }

  isLogged(): boolean{
    console.log(this.getSession());
    if (this.session.cedula) {
      return true;
    }
    return false;
  }

  login(user: User){
    console.log(user);
    sessionStorage.setItem('idUsuario', user.id);
    sessionStorage.setItem('cedula', user.cedula);
    sessionStorage.setItem('tipo', user.tipo);
    window.location.reload();
  }

  logout() {
    this.session.tipo = '';
    this.session.tipoStr = '';
    this.session.cedula = '';
    sessionStorage.removeItem('idUsuario');
    sessionStorage.removeItem('cedula');
    sessionStorage.removeItem('tipo');
    window.location.reload();
  }
}
