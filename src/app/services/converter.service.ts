import { Injectable } from '@angular/core';
import { ICalculationOptions } from '../interfaces/icalculation-options';
import { ICalculationResult } from '../interfaces/icalculation-result';
import { ModeConstants } from '../models/mode-constants';

@Injectable({
  providedIn: 'root'
})
export class ConverterService {

  private readonly KILOSECOND: number = 1000;
  constructor() { }

  public convert(options: ICalculationOptions): ICalculationResult {
    if (options.mode === ModeConstants.NORMAL) {
      const totalSeconds = this.getTotalSeconds(options);

      return { altSeconds: totalSeconds};
    }
  }

  private getTotalSeconds(options: ICalculationOptions): number {
    let seconds = 0;
    if (!!options.seconds && options.seconds < this.KILOSECOND) {
      seconds += options.seconds;
    }

    return seconds;
  }
}
