import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-asistencia',
  templateUrl: './asistencia.page.html',
  styleUrls: ['./asistencia.page.scss'],
})
export class AsistenciaPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  redirectToAsistencia() {
    this.router.navigate(['/asistencia']); // Navega a la página de asistencia
  }
  irAHome() {
    this.router.navigate(['/home']); 
  }
  redirectToInicio() {
    this.router.navigate(['/inicio']); // Navega a la página de asistencia
}
}
