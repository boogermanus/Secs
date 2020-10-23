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
  date: NgbDateStruct;
  time: NgbTimeStruct;
  moment: any;
  range: any = null;
  seconds = 0;
  calculation: ISecsCalculation = {
    seconds: 0,
    kiloSeconds: 0,
    megaSeconds: 0,
    gigaSeconds: 0
  };

  constructor(private calendar: NgbCalendar,
              private secsConverterService: SecsConverterService) {
    this.date = this.calendar.getToday();
    const date = moment();
    this.time = { hour: date.hours(), minute: date.minutes(), second: date.seconds() };
  }

  calculate() {
    const start = moment({
      y: this.date.year,
      M: this.date.month - 1, // subtract 1 because moment is stupid
      d: this.date.day,
      h: this.time.hour,
      m: this.time.minute,
      s: this.time.second,
    });
    const end = moment();

    this.range = moment.range(start, end);
    this.seconds = Math.abs(this.range.diff('second'));

    this.calculation = this.secsConverterService.calculate(this.seconds);
  }
}
