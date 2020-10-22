import { Injectable } from '@angular/core';
import { ISecsCalculation } from '../models/isecs-calculation';

@Injectable({
  providedIn: 'root'
})
export class SecsConverterService {

  constructor() { }

  calculate(seconds: number): ISecsCalculation {
    const result: ISecsCalculation = {
      seconds,
      kiloSeconds: 0,
      megaSeconds: 0,
      gigaSeconds: 0
    };

    return result;
  }
  getKiloSeconds(seconds: number): number {
    return seconds / Math.pow(10, 3);
  }
}
