import { Component } from '@angular/core';
import { NgbCalendar, NgbDateStruct, NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';
import * as Moment from 'moment';
import { extendMoment } from 'moment-range';
import { ISecsCalculation } from './models/isecs-calculation';
import { SecsConverterService } from './services/secs-converter.service';
const moment = extendMoment(Moment);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  start: moment.Moment;
  range: any = null;
  seconds = 0;
  calculation: ISecsCalculation = {
    seconds: 0,
    kiloSeconds: 0,
    megaSeconds: 0,
    gigaSeconds: 0
  };

  constructor(private secsConverterService: SecsConverterService) {
  }

  calculate() {
    const end = moment();

    this.range = moment.range(this.start, end);
    this.seconds = Math.abs(this.range.diff('second'));

    this.calculation = this.secsConverterService.calculate(this.seconds);
  }

  updateStartTime(start: moment.Moment): void {
    this.start = start;
  }
}
