import { Component, EventEmitter, OnInit } from '@angular/core';
import { NgbCalendar, NgbDateStruct, NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';

@Component({
  selector: 'app-secs-date-time',
  templateUrl: './secs-date-time.component.html',
  styleUrls: ['./secs-date-time.component.css']
})
export class SecsDateTimeComponent implements OnInit {

  date: NgbDateStruct;
  time: NgbTimeStruct;
  momentChangedEmitter: EventEmitter<moment.Moment> = new EventEmitter<moment.Moment>();
  constructor(private calendar: NgbCalendar) { }

  ngOnInit(): void {
    this.date = this.calendar.getToday();
    const date = moment();
    this.time = { hour: date.hours(), minute: date.minutes(), second: date.seconds() };
  }

  public momentChanged(): void {
    this.momentChangedEmitter.emit(moment({
      y: this.date.year,
      M: this.date.month - 1, // subtract 1 because moment is stupid
      d: this.date.day,
      h: this.time.hour,
      m: this.time.minute,
      s: this.time.second,
    }));
  }

}
