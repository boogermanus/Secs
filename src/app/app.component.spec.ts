import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import * as moment from 'moment';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        NgbModule,
      ]
    }).compileComponents();

  }));

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
