import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';
import { SecsDateTimeComponent } from './secs-date-time.component';

describe('SecsDateTimeComponent', () => {
  let component: SecsDateTimeComponent;
  let fixture: ComponentFixture<SecsDateTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SecsDateTimeComponent],
      imports: [NgbModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecsDateTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have method momentChanged()', () => {
    expect(component.momentChanged).toBeDefined();
  });

  describe('momentChanged', () => {
    it('should emit', () => {
      spyOn(component.momentChangedEmitter, 'emit');
      component.momentChanged();
      expect(component.momentChangedEmitter.emit).toHaveBeenCalledWith(moment({
        y: component.date.year,
        M: component.date.month - 1, // subtract 1 because moment is stupid
        d: component.date.day,
        h: component.time.hour,
        m: component.time.minute,
        s: component.time.second,
      }));
    });
  });
});
