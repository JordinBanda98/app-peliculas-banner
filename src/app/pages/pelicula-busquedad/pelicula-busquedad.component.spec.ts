import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeliculaBusquedadComponent } from './pelicula-busquedad.component';

describe('PeliculaBusquedadComponent', () => {
  let component: PeliculaBusquedadComponent;
  let fixture: ComponentFixture<PeliculaBusquedadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeliculaBusquedadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeliculaBusquedadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
