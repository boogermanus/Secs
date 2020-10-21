import { Component } from '@angular/core';
import { NgbCalendar, NgbDateStruct, NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';
import * as Moment from 'moment';
import { extendMoment } from 'moment-range';
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

  constructor(private calendar: NgbCalendar) {
    this.date = this.calendar.getToday();
    const date = moment();
    this.time = { hour: date.hours(), minute: date.minutes(), second: date.seconds() };
  }

  calculate() {
    const start = moment({
      y: this.date.year,
      M: this.date.month - 1, // subtract 1 because it's not that month
      d: this.date.day,
      h: this.time.hour,
      m: this.time.minute,
      s: this.time.second,
    });
    const end = moment();

    this.range = moment.range(start, end);

    console.log(this.range.diff('second'));
    console.log(moment());
  }
}
