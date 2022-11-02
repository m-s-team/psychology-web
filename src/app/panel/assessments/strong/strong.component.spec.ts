import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrongComponent } from './strong.component';

describe('StrongComponent', () => {
  let component: StrongComponent;
  let fixture: ComponentFixture<StrongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StrongComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StrongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
