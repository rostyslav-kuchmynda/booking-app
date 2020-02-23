import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventInfoDialogComponent } from './event-info-dialog.component';

describe('EventInfoDialogComponent', () => {
  let component: EventInfoDialogComponent;
  let fixture: ComponentFixture<EventInfoDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventInfoDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventInfoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
