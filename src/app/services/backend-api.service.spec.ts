import { TestBed } from '@angular/core/testing';

import { ChangeLogService } from '../changelog/changelog.service';

describe('BackendApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChangeLogService = TestBed.get(ChangeLogService);
    expect(service).toBeTruthy();
  });
});
