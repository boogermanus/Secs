import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbCalendar, NgbDateStruct, NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';
import moment from 'moment';

@Component({
  selector: 'app-secs-date-time',
  templateUrl: './secs-date-time.component.html',
  styleUrls: ['./secs-date-time.component.css']
})
export class SecsDateTimeComponent implements OnInit {

  date: NgbDateStruct;
  time: NgbTimeStruct;
  @Input()header = '';
  @Input()initialMoment: moment.Moment = null;
  @Output()momentChanged: EventEmitter<moment.Moment> = new EventEmitter<moment.Moment>();
  constructor(private calendar: NgbCalendar) { }

  ngOnInit(): void {

    if (this.initialMoment == null) {
      this.date = this.calendar.getToday();
      const date = moment();
      this.time = { hour: date.hours(), minute: date.minutes(), second: date.seconds() };
    }
    else {
      this.date = {year: this.initialMoment.year(), month: this.initialMoment.month() + 1, day: this.initialMoment.date()};
      this.time = {hour: this.initialMoment.hours(), minute: this.initialMoment.minutes(), second: this.initialMoment.seconds()};
    }

    this.ngModelChanged();
  }

  public ngModelChanged(): void {
    this.momentChanged.emit(this.getMoment());
  }

  private getMoment(): moment.Moment {
    return moment({
      y: this.date.year,
      M: this.date.month - 1, // subtract 1 because moment is stupid
      d: this.date.day,
      h: this.time.hour,
      m: this.time.minute,
      s: this.time.second,
    });
  }

}
