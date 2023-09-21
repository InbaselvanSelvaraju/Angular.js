import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesLayoutComponent } from './movies-layout.component';

describe('MoviesLayoutComponent', () => {
  let component: MoviesLayoutComponent;
  let fixture: ComponentFixture<MoviesLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MoviesLayoutComponent]
    });
    fixture = TestBed.createComponent(MoviesLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
