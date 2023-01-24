import { TestBed } from '@angular/core/testing';

import { HairDSysDataService } from './hair-dsys-data.service';

describe('HairDSysDataService', () => {
  let service: HairDSysDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HairDSysDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
