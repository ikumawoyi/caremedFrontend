import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMedicationsComponent } from './list-medications.component';

describe('ListMedicationsComponent', () => {
  let component: ListMedicationsComponent;
  let fixture: ComponentFixture<ListMedicationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListMedicationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMedicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
