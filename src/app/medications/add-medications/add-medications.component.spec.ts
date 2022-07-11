import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMedicationsComponent } from './add-medications.component';

describe('AddMedicationsComponent', () => {
  let component: AddMedicationsComponent;
  let fixture: ComponentFixture<AddMedicationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMedicationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMedicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
