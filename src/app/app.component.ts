import { Component, OnInit } from '@angular/core';
import { NgbCalendar, NgbDateStruct, NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';
import * as Moment from 'moment';
import { extendMoment } from 'moment-range';
import { ISecsCalculation } from './models/isecs-calculation';
import { SecsConverterService } from './services/secs-converter.service';
const moment = extendMoment(Moment);

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: false
})
export class AppComponent implements OnInit {
  start: moment.Moment;
  end: moment.Moment;
  range: any = null;
  seconds = 0;
  calculation: ISecsCalculation;

  constructor(private secsConverterService: SecsConverterService) {
  }

  ngOnInit(): void {
    this.end = moment().add(1000, 's');
  }

  calculate(): void {
    this.range = moment.range(this.start, this.end);
    this.seconds = Math.abs(this.range.diff('second'));

    this.calculation = this.secsConverterService.calculate(this.seconds);
  }

  updateStartTime(start: moment.Moment): void {
    this.start = start;
  }

  updateEndTime(end: moment.Moment): void {
    this.end = end;
  }
}
