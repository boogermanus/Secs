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

  it('should have method calculate', () => {
    expect(service.calculate).toBeDefined();
  });

  describe('calculate()', () => {
    it('should return a non-null calculation object', () => {
      const result = service.calculate(0);
      expect(result).not.toBeNull();
    });

    it('it should return 999 seconds', () => {
      const result = service.calculate(999);
      expect(result.seconds).toBe(999);
    });

    it('it should return 1 kilosecond', () => {
      const result = service.calculate(1000);
      expect(result.kiloSeconds).toBe(1);
    });

    it('should return 1 second for 1 kilosecond and 1 second', () => {
      const result = service.calculate(1001);
      expect(result.seconds).toBe(1);
    });

    it('should return 1 mega second', () => {
      const result = service.calculate(Math.pow(10, 6));
      expect(result.megaSeconds).toBe(1);
    });

    it('should return 1 giga second', () => {
      const result = service.calculate(Math.pow(10, 9));
      expect(result.gigaSeconds).toBe(1);
    });
  });
});
