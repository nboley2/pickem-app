import { TestBed } from '@angular/core/testing';

import { MatchupsService } from './matchups.service';

describe('MatchupsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MatchupsService = TestBed.get(MatchupsService);
    expect(service).toBeTruthy();
  });
});
