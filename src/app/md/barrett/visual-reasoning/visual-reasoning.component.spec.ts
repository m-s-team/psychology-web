import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualReasoningComponent } from './visual-reasoning.component';

describe('VisualReasoningComponent', () => {
  let component: VisualReasoningComponent;
  let fixture: ComponentFixture<VisualReasoningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisualReasoningComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisualReasoningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
