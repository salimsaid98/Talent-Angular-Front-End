import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TalentByIdComponent } from './talent-by-id.component';

describe('TalentByIdComponent', () => {
  let component: TalentByIdComponent;
  let fixture: ComponentFixture<TalentByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TalentByIdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TalentByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
