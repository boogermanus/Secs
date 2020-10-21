import { TestBed } from '@angular/core/testing';

import { SecsConverterService } from './secs-converter.service';

describe('SecsConverterService', () => {
  let service: SecsConverterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SecsConverterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have method getKiloSeconds', () => {
    expect(service.getKiloSeconds).toBeDefined();
  });
});
