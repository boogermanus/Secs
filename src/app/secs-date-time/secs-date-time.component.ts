import { Component, EventEmitter, OnInit } from '@angular/core';
import { NgbDateStruct, NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';

@Component({
  selector: 'app-secs-date-time',
  templateUrl: './secs-date-time.component.html',
  styleUrls: ['./secs-date-time.component.css']
})
export class SecsDateTimeComponent implements OnInit {

  date: NgbDateStruct;
  time: NgbTimeStruct;
  momentChangedEmitter: EventEmitter<moment.Moment>;
  constructor() { }

  ngOnInit(): void {
  }

  public momentChanged(): void {
    this.momentChangedEmitter.emit(moment());
  }

}
