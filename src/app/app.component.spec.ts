import { TestBed, ComponentFixture } from '@angular/core/testing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import * as moment from 'moment';
import { SecsDateTimeComponent } from './secs-date-time/secs-date-time.component';
import { SecsDisplayComponent } from './secs-display/secs-display.component';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  beforeEach(async() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        SecsDateTimeComponent,
        SecsDisplayComponent
      ],
      imports: [
        NgbModule,
        FormsModule,
        MatIconModule
      ]
    }).compileComponents();

  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should have method calculate', () => {
    expect(component.calculate).toBeDefined();
  });

  it('should have method updateStartTime', () => {
    expect(component.updateStartTime).toBeDefined();
  });

  it('should have method updateEndTime', () => {
    expect(component.updateEndTime).toBeDefined();
  });

  describe('calculate()', () => {
    it('should set calculation to be defined', () => {
      component.calculate();
      expect(component.calculation).toBeDefined();
    });
  });

  describe('updateStartTime()', () => {
    it('should update start', () => {
      const now = moment();
      component.updateStartTime(now);

      expect(component.start).toEqual(now);
    });
  });

  describe('updateEndTime()', () => {
    it('should update end', () => {
      const now = moment();
      component.updateEndTime(now);

      expect(component.end).toEqual(now);
    });
  });
});
