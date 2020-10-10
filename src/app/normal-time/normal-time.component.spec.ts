import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NormalTimeComponent } from './normal-time.component';

describe('NormalTimeComponent', () => {
  let component: NormalTimeComponent;
  let fixture: ComponentFixture<NormalTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NormalTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NormalTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
