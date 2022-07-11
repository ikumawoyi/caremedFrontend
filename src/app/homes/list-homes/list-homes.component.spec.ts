import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListHomesComponent } from './list-homes.component';

describe('ListHomesComponent', () => {
  let component: ListHomesComponent;
  let fixture: ComponentFixture<ListHomesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListHomesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListHomesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
