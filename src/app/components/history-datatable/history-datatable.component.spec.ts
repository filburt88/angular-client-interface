import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryDatatableComponent } from './history-datatable.component';

describe('HistoryDatatableComponent', () => {
  let component: HistoryDatatableComponent;
  let fixture: ComponentFixture<HistoryDatatableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoryDatatableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
