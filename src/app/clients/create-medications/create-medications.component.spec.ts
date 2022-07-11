import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMedicationsComponent } from './create-medications.component';

describe('CreateMedicationsComponent', () => {
  let component: CreateMedicationsComponent;
  let fixture: ComponentFixture<CreateMedicationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateMedicationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateMedicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
