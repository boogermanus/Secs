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

  constructor(private calendar: NgbCalendar) {
    this.date = this.calendar.getToday();
    const date = new Date();
    this.time = { hour: date.getHours(), minute: date.getMinutes(), second: date.getSeconds() };
    this.moment = moment();
    console.log(moment.range(moment('10/29/81'), moment('10/29/2020')).diff('second'));
  }
}
