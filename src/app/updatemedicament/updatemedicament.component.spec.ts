import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatemedicamentComponent } from './updatemedicament.component';

describe('UpdatemedicamentComponent', () => {
  let component: UpdatemedicamentComponent;
  let fixture: ComponentFixture<UpdatemedicamentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatemedicamentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatemedicamentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
