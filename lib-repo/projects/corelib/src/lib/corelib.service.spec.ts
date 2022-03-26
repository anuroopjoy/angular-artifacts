import { TestBed } from '@angular/core/testing';

import { CorelibService } from './corelib.service';

describe('CorelibService', () => {
  let service: CorelibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CorelibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
