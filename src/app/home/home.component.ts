import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  cedula = '';
  tipo = '';

  ngOnInit(): void {
    this.cedula = sessionStorage.getItem('cedula') || '';
    this.tipo = sessionStorage.getItem('tipo') || '';
  }

  logout(){
    this.cedula = '';
    this.tipo = '';
    sessionStorage.removeItem('cedula');
    sessionStorage.removeItem('tipo');
  }

}
