import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AeditarComponent } from './aeditar.component';

describe('AeditarComponent', () => {
  let component: AeditarComponent;
  let fixture: ComponentFixture<AeditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AeditarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AeditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
