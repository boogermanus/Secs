import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SecsConverterService {

  constructor() { }

  getKiloSeconds(seconds: number): number {
    return seconds / Math.pow(10, 3);
  }
}
