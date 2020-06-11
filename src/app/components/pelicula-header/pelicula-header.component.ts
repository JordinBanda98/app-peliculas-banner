import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pelicula-header',
  templateUrl: './pelicula-header.component.html',
  styleUrls: ['./pelicula-header.component.scss']
})
export class PeliculaHeaderComponent implements OnInit {

  constructor(private router: Router) { 
    console.log('Ingresamos a busquedad');
  }

  ngOnInit(): void {
  }
  buscar_pelicula(termino: string) {
    console.log(termino);
    this.router.navigate(['pelicula-busquedad', termino]);
  }
}
