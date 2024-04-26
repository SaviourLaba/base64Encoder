import { TestBed } from '@angular/core/testing';

import { Base64EncodingService } from './base64-encoding.service';

describe('Base64EncodingService', () => {
  let service: Base64EncodingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Base64EncodingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
