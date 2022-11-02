import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GardnerComponent } from './gardner.component';

describe('GardnerComponent', () => {
  let component: GardnerComponent;
  let fixture: ComponentFixture<GardnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GardnerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GardnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
