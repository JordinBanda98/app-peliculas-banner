import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PeliculaCabComponent } from './pages/pelicula-cab/pelicula-cab.component';
import { PeliculaDetalleComponent } from './pages/pelicula-detalle/pelicula-detalle.component';
import { PeliculaBusquedadComponent } from './pages/pelicula-busquedad/pelicula-busquedad.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'pelicula-cab', component: PeliculaCabComponent },
  { path: 'pelicula-det/:nombre', component: PeliculaDetalleComponent },
  {path: 'pelicula-busquedad/:termino',component: PeliculaBusquedadComponent,},
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
