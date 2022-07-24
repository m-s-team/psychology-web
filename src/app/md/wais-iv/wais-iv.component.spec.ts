import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaisIvComponent } from './wais-iv.component';

describe('WaisIvComponent', () => {
  let component: WaisIvComponent;
  let fixture: ComponentFixture<WaisIvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WaisIvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WaisIvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
