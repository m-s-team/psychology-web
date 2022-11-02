import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MmpiComponent } from './mmpi.component';

describe('MmpiComponent', () => {
  let component: MmpiComponent;
  let fixture: ComponentFixture<MmpiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MmpiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MmpiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
