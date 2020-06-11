import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { PeliculaBusquedadComponent } from './pages/pelicula-busquedad/pelicula-busquedad.component';
import { PeliculaCabComponent } from './pages/pelicula-cab/pelicula-cab.component';
import { PeliculaDetalleComponent } from './pages/pelicula-detalle/pelicula-detalle.component';
import { PeliculaHeaderComponent } from './components/pelicula-header/pelicula-header.component';
import { PeliculaTarjetaComponent } from './components/pelicula-tarjeta/pelicula-tarjeta.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PeliculaBusquedadComponent,
    PeliculaCabComponent,
    PeliculaDetalleComponent,
    PeliculaHeaderComponent,
    PeliculaTarjetaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
