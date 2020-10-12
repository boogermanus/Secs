import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpandedTimeComponent } from './expanded-time.component';

describe('ExpandedTimeComponent', () => {
  let component: ExpandedTimeComponent;
  let fixture: ComponentFixture<ExpandedTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpandedTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpandedTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
