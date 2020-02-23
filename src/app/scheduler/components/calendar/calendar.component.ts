import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { RoomInterface } from '../../interfaces/room-interface';
import { timeIntoMinutes } from '../../services/timeIntoMinutes';
import { MINUTE_HEIGHT } from '../../constants';
import { Observable } from 'rxjs';
import { FirebaseService } from '../../services/firebase.service';
import { LocalStorageService } from '../../services/local-storage.service';
import { RoomListDialogComponent } from '../header/header-settings-gear/room-list-dialog/room-list-dialog.component';
import { EventInterface } from '../../interfaces/event-interface';
import { SelectedDateService } from '../../services/selectedDate.service';
import { map } from 'rxjs/operators';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'bs-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent implements OnInit {
  timePosition: { [klass: string]: string };
  roomsToDisplay: RoomInterface[] = [];
  eventsArray$: Observable<EventInterface[]>;
  todayDisplayed$: Observable<boolean>;

  constructor(
    private firebaseService: FirebaseService,
    private localStorageService: LocalStorageService,
    private selectedDateService: SelectedDateService,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.todayDisplayed$ = this.selectedDateService.compareDates();
    this.roomsToDisplay = this.localStorageService.getSelectedRooms();

    if (this.roomsToDisplay.length === 0) {
      this.dialog.open(RoomListDialogComponent);
    }

    this.eventsArray$ = this.firebaseService.getEvents$();

    const today: string = new Date().toISOString();
    const currentTime: number = timeIntoMinutes(today);

    this.timePosition = {
      position: 'absolute',
      top: `${(currentTime - 420) * MINUTE_HEIGHT}` + 'rem',
    };
  }
}
