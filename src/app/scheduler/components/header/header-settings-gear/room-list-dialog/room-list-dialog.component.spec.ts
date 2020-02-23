import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomListDialogComponent } from './room-list-dialog.component';

describe('RoomListDialogComponent', () => {
  let component: RoomListDialogComponent;
  let fixture: ComponentFixture<RoomListDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RoomListDialogComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomListDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
