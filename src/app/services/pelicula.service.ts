import { Injectable } from '@angular/core';
import { _peliculas } from '../config/pelicula';
import { Pelicula } from 'src/app/classes/pelicula.interface'

@Injectable({
  providedIn: 'root'
})
export class PeliculaService {

  constructor() { }
  getAllPeliculas() {
    return _peliculas;
  }
  getPelicula(nombrePelicula: string): Pelicula {
    return _peliculas.filter(peli => peli.nombre === nombrePelicula)[0];
  }

  Obtener_pelicula_det(termino: string) {
    return _peliculas.filter(peli => peli.nombre.toUpperCase().includes(termino.toUpperCase()));
  }
}
