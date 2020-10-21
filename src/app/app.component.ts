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
    const date = new Date();
    this.time = { hour: date.getHours(), minute: date.getMinutes(), second: date.getSeconds() };
  }

  calculate() {
    this.range = moment.range(moment(
      {
        y: this.date.year,
        M: this.date.month,
        d: this.date.day,
        h: this.time.hour,
        m: this.time.minute,
        s: this.time.second,
      }),
      moment());
  }
}
