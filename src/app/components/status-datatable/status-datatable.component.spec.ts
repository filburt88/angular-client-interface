import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusDatatableComponent } from './status-datatable.component';

describe('StatusDatatableComponent', () => {
  let component: StatusDatatableComponent;
  let fixture: ComponentFixture<StatusDatatableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatusDatatableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
