import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AborrarComponent } from './aborrar.component';

describe('AborrarComponent', () => {
  let component: AborrarComponent;
  let fixture: ComponentFixture<AborrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AborrarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AborrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
