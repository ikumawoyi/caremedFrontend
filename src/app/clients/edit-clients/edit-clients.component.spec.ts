import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditClientsComponent } from './edit-clients.component';

describe('EditClientsComponent', () => {
  let component: EditClientsComponent;
  let fixture: ComponentFixture<EditClientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditClientsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
