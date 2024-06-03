import { TestBed } from '@angular/core/testing';

import { KrsService } from './krs.service';

describe('KrsService', () => {
  let service: KrsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KrsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
