import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditHomesComponent } from './edit-homes.component';

describe('EditHomesComponent', () => {
  let component: EditHomesComponent;
  let fixture: ComponentFixture<EditHomesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditHomesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditHomesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
