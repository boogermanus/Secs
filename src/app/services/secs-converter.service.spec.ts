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

  it('should have method calculate', () => {
    expect(service.calculate).toBeDefined();
  });

  describe('getKiloSeconds()', () => {
    it('should return 1 kilosecond', () => {
      expect(service.getKiloSeconds(1000)).toEqual(1);
    });
    it('should not be equal to 1 kilosecond', () => {
      const result = service.getKiloSeconds(1001);
      expect(result).not.toEqual(1);
    });
  });

  describe('calculate()', () => {
    it('should return a non-null calculation object', () => {
      const result = service.calculate(0);

      expect(result).not.toBeNull();
    });
  });
});
