import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AanadirComponent } from './aanadir.component';

describe('AanadirComponent', () => {
  let component: AanadirComponent;
  let fixture: ComponentFixture<AanadirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AanadirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AanadirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
