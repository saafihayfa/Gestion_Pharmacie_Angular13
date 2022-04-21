import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCommandesComponent } from './add-commandes.component';

describe('AddCommandesComponent', () => {
  let component: AddCommandesComponent;
  let fixture: ComponentFixture<AddCommandesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCommandesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCommandesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
