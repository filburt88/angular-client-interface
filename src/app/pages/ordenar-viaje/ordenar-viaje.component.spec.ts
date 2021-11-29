import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdenarViajeComponent } from './ordenar-viaje.component';

describe('OrdenarViajeComponent', () => {
  let component: OrdenarViajeComponent;
  let fixture: ComponentFixture<OrdenarViajeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdenarViajeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdenarViajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
