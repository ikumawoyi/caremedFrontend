import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewHomesComponent } from './view-homes.component';

describe('ViewHomesComponent', () => {
  let component: ViewHomesComponent;
  let fixture: ComponentFixture<ViewHomesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewHomesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewHomesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
