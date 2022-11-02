import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaisComponent } from './wais.component';

describe('WaisComponent', () => {
  let component: WaisComponent;
  let fixture: ComponentFixture<WaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WaisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
