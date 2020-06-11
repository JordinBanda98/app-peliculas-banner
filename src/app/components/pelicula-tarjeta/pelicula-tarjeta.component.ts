import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Pelicula } from 'src/app/classes/pelicula.interface'
@Component({
  selector: 'app-pelicula-tarjeta',
  templateUrl: './pelicula-tarjeta.component.html',
  styleUrls: ['./pelicula-tarjeta.component.scss']
})
export class PeliculaTarjetaComponent implements OnInit {
  @Input() in_Pelicula: Pelicula;
  @Output() salida = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  visitar_detalle_pelicula(_pelicula: Pelicula) {
    this.salida.emit(_pelicula.nombre);
  }
}
