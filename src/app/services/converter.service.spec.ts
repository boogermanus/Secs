import { TestBed } from '@angular/core/testing';
import { ICalculationOptions } from '../interfaces/icalculation-options';
import { ModeConstants } from '../models/mode-constants';

import { ConverterService } from './converter.service';

describe('ConverterService', () => {
  let service: ConverterService;
  const calcuationOptions: ICalculationOptions = {mode: ModeConstants.NORMAL};

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConverterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have method convert()', () => {
    expect(service.convert).toBeDefined();
  });

  describe('convert()', () => {
    it('should calculate anything less than 1000 seconds as seconds', () => {
      for (let i = 0; i < 1000; i++) {
        calcuationOptions.seconds = i;
        const result = service.convert(calcuationOptions);

        expect(result.altSeconds).toBe(calcuationOptions.seconds);
      }
    });
  });
});
