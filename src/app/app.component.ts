import { Component } from '@angular/core';
import { NgbCalendar, NgbDateStruct, NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  date: NgbDateStruct;
  time: NgbTimeStruct = {hour: 0, minute: 0, second: 0};

  constructor(private calendar: NgbCalendar) {
    this.date = this.calendar.getToday();
  }
}
