import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlistadoComponent } from './alistado.component';

describe('AlistadoComponent', () => {
  let component: AlistadoComponent;
  let fixture: ComponentFixture<AlistadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlistadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlistadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
