import { TestBed } from '@angular/core/testing';

import { MatkulService } from './matkul.service';

describe('MatkulService', () => {
  let service: MatkulService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MatkulService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
