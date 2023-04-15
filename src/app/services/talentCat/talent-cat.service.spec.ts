import { TestBed } from '@angular/core/testing';

import { TalentCatService } from './talent-cat.service';

describe('TalentCatService', () => {
  let service: TalentCatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TalentCatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
