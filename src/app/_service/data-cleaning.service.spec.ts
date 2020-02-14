import { TestBed } from '@angular/core/testing';

import { DataCleaningService } from './data-cleaning.service';

describe('DataCleaningService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataCleaningService = TestBed.get(DataCleaningService);
    expect(service).toBeTruthy();
  });
});
