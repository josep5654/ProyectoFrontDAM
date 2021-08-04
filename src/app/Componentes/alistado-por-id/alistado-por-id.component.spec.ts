import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlistadoPorIdComponent } from './alistado-por-id.component';

describe('AlistadoPorIdComponent', () => {
  let component: AlistadoPorIdComponent;
  let fixture: ComponentFixture<AlistadoPorIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlistadoPorIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlistadoPorIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
