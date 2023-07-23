import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Session } from 'src/app/shared/model/session.model';
import { SessionService } from 'src/app/shared/service/session.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  cedula = '';
  tipo = '';
  tipoStr = '';

  constructor(private router: Router, private sessionService: SessionService) {}

  ngOnInit(): void {
    let session: Session = this.sessionService.getSession();
    this.cedula = session.cedula;
    this.tipo = session.tipo;
    this.tipoStr = session.tipoStr;

    this.router.navigate(['']);
  }

  logout() {
    this.cedula = '';
    this.tipo = '';
    this.sessionService.logout();
  }
}
