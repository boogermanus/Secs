import { Component, Input, OnInit } from '@angular/core';
import { ISecsCalculation } from '../models/isecs-calculation';

@Component({
  selector: 'app-secs-display',
  templateUrl: './secs-display.component.html',
  styleUrls: ['./secs-display.component.css']
})
export class SecsDisplayComponent implements OnInit {

  @Input()calculation: ISecsCalculation;
  constructor() { }

  ngOnInit(): void {
    if (this.calculation === undefined) {
      this.calculation  = {
        seconds: 0,
        kiloSeconds: 0,
        megaSeconds: 0,
        gigaSeconds: 0
      };
    }
  }

}
