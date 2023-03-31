import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccademicQualificationComponent } from './accademic-qualification.component';

describe('AccademicQualificationComponent', () => {
  let component: AccademicQualificationComponent;
  let fixture: ComponentFixture<AccademicQualificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccademicQualificationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccademicQualificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
