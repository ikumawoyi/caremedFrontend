import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteHomesComponent } from './delete-homes.component';

describe('DeleteHomesComponent', () => {
  let component: DeleteHomesComponent;
  let fixture: ComponentFixture<DeleteHomesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteHomesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteHomesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
