import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeliculaCabComponent } from './pelicula-cab.component';

describe('PeliculaCabComponent', () => {
  let component: PeliculaCabComponent;
  let fixture: ComponentFixture<PeliculaCabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeliculaCabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeliculaCabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
