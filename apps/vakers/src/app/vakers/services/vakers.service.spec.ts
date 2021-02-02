import { TestBed } from '@angular/core/testing';

import { VakersService } from './vakers.service';

describe('VakersService', () => {
  let service: VakersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VakersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
