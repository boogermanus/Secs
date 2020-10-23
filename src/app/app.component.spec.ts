import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';

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

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  }));

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should have method calculate', () => {
    expect(component.calculate).toBeDefined();
  });

  it('should have method updateStartTime', () => {
    expect(component.updateStartTime).toBeDefined();
  });

  describe('calculate()', () => {
    it('should set calculation to be defined', () => {
      component.calculate();
      expect(component.calculation).toBeDefined();
    });
  });
});
