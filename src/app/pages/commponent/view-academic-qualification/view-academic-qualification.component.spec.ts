import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAcademicQualificationComponent } from './view-academic-qualification.component';

describe('ViewAcademicQualificationComponent', () => {
  let component: ViewAcademicQualificationComponent;
  let fixture: ComponentFixture<ViewAcademicQualificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAcademicQualificationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAcademicQualificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
