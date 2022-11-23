import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamCpComponent } from './exam-cp.component';

describe('ExamCpComponent', () => {
  let component: ExamCpComponent;
  let fixture: ComponentFixture<ExamCpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamCpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExamCpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
