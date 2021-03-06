import { Injectable } from '@angular/core';
import { ISecsCalculation } from '../models/isecs-calculation';

@Injectable({
  providedIn: 'root'
})
export class SecsConverterService {

  private readonly KILO_SECOND = Math.pow(10, 3);
  private readonly MEGA_SECOND = Math.pow(10, 6);
  private readonly GIGA_SECOND = Math.pow(10, 9);
  constructor() { }

  public calculate(seconds: number): ISecsCalculation {
    let result: ISecsCalculation = {
      seconds,
      kiloSeconds: 0,
      megaSeconds: 0,
      gigaSeconds: 0
    };

    result = this.getGigaSeconds(result);
    result = this.getMegaSeconds(result);
    result = this.getKiloSeconds(result);

    return result;
  }

  private getGigaSeconds(calculation: ISecsCalculation): ISecsCalculation {
    if (calculation.seconds < this.GIGA_SECOND) {
      return calculation;
    }

    calculation.gigaSeconds = Math.floor(calculation.seconds / this.GIGA_SECOND);
    calculation.seconds = calculation.seconds % this.GIGA_SECOND;

    return calculation;
  }

  private getMegaSeconds(calculation: ISecsCalculation): ISecsCalculation {
    if (calculation.seconds < this.MEGA_SECOND) {
      return calculation;
    }

    calculation.megaSeconds = Math.floor(calculation.seconds / this.MEGA_SECOND);
    calculation.seconds = calculation.seconds % this.MEGA_SECOND;

    return calculation;
  }

  private getKiloSeconds(calculation: ISecsCalculation): ISecsCalculation {
    if (calculation.seconds < this.KILO_SECOND) {
      return calculation;
    }

    calculation.kiloSeconds = Math.floor(calculation.seconds / this.KILO_SECOND);
    calculation.seconds = calculation.seconds % this.KILO_SECOND;

    return calculation;
  }

}
