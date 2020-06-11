import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Pelicula } from 'src/app/classes/pelicula.interface';
import { PeliculaService } from 'src/app/services/pelicula.service';

@Component({
  selector: 'app-pelicula-busquedad',
  templateUrl: './pelicula-busquedad.component.html',
  styleUrls: ['./pelicula-busquedad.component.scss']
})
export class PeliculaBusquedadComponent implements OnInit {
  listaPeliculas: Pelicula[];
  constructor(private router: Router, private activatedRouter: ActivatedRoute,
    private peliculaService: PeliculaService) { 
    console.log('ingresamos una busqueda');
    this.activatedRouter.params.subscribe(
      params => this.listaPeliculas = peliculaService.Obtener_pelicula_det(params['termino'].toString())
    );
    }

  ngOnInit(): void {
  }
  escucharHijo(nombre: string) {
    this.router.navigate(['pelicula-cab', nombre]);
  }
}
