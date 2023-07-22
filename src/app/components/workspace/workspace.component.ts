import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.css']
})
export class WorkspaceComponent implements OnInit{
  cedula = '';
  tipo = '';

  ngOnInit(): void {
    this.cedula = sessionStorage.getItem('cedula') || '';
    this.tipo = sessionStorage.getItem('tipo') || '';
  }
  
}
