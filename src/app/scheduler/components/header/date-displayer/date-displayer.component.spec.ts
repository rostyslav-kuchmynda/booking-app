import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateDisplayerComponent } from './date-displayer.component';

describe('DateDisplayerComponent', () => {
  let component: DateDisplayerComponent;
  let fixture: ComponentFixture<DateDisplayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateDisplayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateDisplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
