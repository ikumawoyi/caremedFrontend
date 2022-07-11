import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHomesComponent } from './add-homes.component';

describe('AddHomesComponent', () => {
  let component: AddHomesComponent;
  let fixture: ComponentFixture<AddHomesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddHomesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddHomesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
