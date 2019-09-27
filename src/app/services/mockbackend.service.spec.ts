import { TestBed } from '@angular/core/testing';

import { MockBackendService } from './mockbackend.service';

describe('MockbackendService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MockBackendService = TestBed.get(MockBackendService);
    expect(service).toBeTruthy();
  });
});
