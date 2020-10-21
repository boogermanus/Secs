import { Component } from '@angular/core';
import { NgbCalendar, NgbDateStruct, NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  date: NgbDateStruct;
  time: NgbTimeStruct;

  constructor(private calendar: NgbCalendar) {
    this.date = this.calendar.getToday();
    const date = new Date();
    this.time = {hour: date.getHours(), minute: date.getMinutes(), second: date.getSeconds()};
  }
}
