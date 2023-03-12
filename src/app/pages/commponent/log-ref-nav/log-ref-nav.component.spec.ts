import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogRefNavComponent } from './log-ref-nav.component';

describe('LogRefNavComponent', () => {
  let component: LogRefNavComponent;
  let fixture: ComponentFixture<LogRefNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogRefNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogRefNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
