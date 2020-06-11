import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeliculaHeaderComponent } from './pelicula-header.component';

describe('PeliculaHeaderComponent', () => {
  let component: PeliculaHeaderComponent;
  let fixture: ComponentFixture<PeliculaHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeliculaHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeliculaHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
