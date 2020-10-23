import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { SecsDateTimeComponent } from './secs-date-time.component';

describe('SecsDateTimeComponent', () => {
  let component: SecsDateTimeComponent;
  let fixture: ComponentFixture<SecsDateTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecsDateTimeComponent ],
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
});
