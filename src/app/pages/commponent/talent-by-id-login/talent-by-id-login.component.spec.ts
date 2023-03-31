import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TalentByIdLoginComponent } from './talent-by-id-login.component';

describe('TalentByIdLoginComponent', () => {
  let component: TalentByIdLoginComponent;
  let fixture: ComponentFixture<TalentByIdLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TalentByIdLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TalentByIdLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
