import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { PeliculaService } from 'src/app/services/pelicula.service'
import { Pelicula } from 'src/app/classes/pelicula.interface';

@Component({
  selector: 'app-pelicula-detalle',
  templateUrl: './pelicula-detalle.component.html',
  styleUrls: ['./pelicula-detalle.component.scss']
})
export class PeliculaDetalleComponent implements OnInit {
  pelicula: Pelicula;
  urlImg : string;
  constructor(private peliculaServicio: PeliculaService,
    private activadedRoute: ActivatedRoute, private router: Router) { 
    this.activadedRoute.params.subscribe(
      params => {
        this.pelicula = this.peliculaServicio.getPelicula(params['nombre'].toString());
        //this.urlImg = this.pelicula.casa == 'Marvel' ? 'assets/marvel-icon.png' : 'assets/dc-icon.png';
      }
    )
    }

  ngOnInit(): void {
  }
  regresar() {
    this.router.navigateByUrl(`/pelicula-cab`);
  }
}
