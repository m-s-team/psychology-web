import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarrettComponent } from './barrett.component';

describe('BarrettComponent', () => {
  let component: BarrettComponent;
  let fixture: ComponentFixture<BarrettComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarrettComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarrettComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
