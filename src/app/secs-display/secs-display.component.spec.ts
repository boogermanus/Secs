import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecsDisplayComponent } from './secs-display.component';

describe('SecsDisplayComponent', () => {
  let component: SecsDisplayComponent;
  let fixture: ComponentFixture<SecsDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecsDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecsDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
