import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteMedicationsComponent } from './delete-medications.component';

describe('DeleteMedicationsComponent', () => {
  let component: DeleteMedicationsComponent;
  let fixture: ComponentFixture<DeleteMedicationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteMedicationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteMedicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
