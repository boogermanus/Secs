import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecsDisplayComponent } from './secs-display.component';
import { FormsModule } from '@angular/forms';

describe('SecsDisplayComponent', () => {
  let component: SecsDisplayComponent;
  let fixture: ComponentFixture<SecsDisplayComponent>;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      declarations: [ SecsDisplayComponent ],
      imports: [
        FormsModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecsDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
