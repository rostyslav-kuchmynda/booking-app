import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultRoomDialogComponent } from './default-room-dialog.component';

describe('DefaultRoomDialogComponent', () => {
  let component: DefaultRoomDialogComponent;
  let fixture: ComponentFixture<DefaultRoomDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefaultRoomDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultRoomDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
