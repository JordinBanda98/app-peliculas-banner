import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PeliculaService } from 'src/app/services/pelicula.service';
import { Pelicula } from 'src/app/classes/pelicula.interface';


@Component({
  selector: 'app-pelicula-cab',
  templateUrl: './pelicula-cab.component.html',
  styleUrls: ['./pelicula-cab.component.scss']
})
export class PeliculaCabComponent implements OnInit {
  listaPelicula : Pelicula[];
  constructor(private peliculaService: PeliculaService, private router: Router) { 
    console.log(this.peliculaService.getAllPeliculas());
  }

  ngOnInit(): void {
    this.listaPelicula = this.peliculaService.getAllPeliculas();
  }
  escucharHijo(nombre: string) {
    this.router.navigateByUrl(`/pelicula-det/${nombre}`);
  }
}
