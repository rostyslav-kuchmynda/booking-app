import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Observable } from 'rxjs';
import { EventInterface } from '../../../interfaces/event-interface';
import { RoomInterface } from '../../../interfaces/room-interface';
import { MINUTE_HEIGHT } from '../../../constants';
import { EventDialogComponent } from '../../event-dialog/event-dialog.component';
import { timeIntoMinutes } from '../../../services/timeIntoMinutes';
import { map } from 'rxjs/operators';

@Component({
  selector: 'bs-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.scss'],
})
export class ColumnComponent implements OnInit {
  @Input() selectedRoom: RoomInterface;
  @Input() events$: Observable<EventInterface[]>;
  addEventButtonPosition: { [klass: string]: string };
  labelPosition: { [klass: string]: string };
  headerStyle: { [klass: string]: string };

  someEvents: EventInterface[] = [];

  @ViewChild('column', { static: true }) column: ElementRef;

  constructor(public dialog: MatDialog) {}

  ngOnInit() {
    this.events$
      .pipe(
        map(obsArr => {
          this.someEvents = obsArr;
          return this.someEvents;
        })
      )
      .subscribe();

    const columnWidth: number = this.column.nativeElement.offsetWidth / 10;
    // column width minus button width and right margin (56px + 20px)
    const buttonPosition: number = (this.column.nativeElement.offsetWidth - 76) / 10;

    this.headerStyle = {
      width: `${columnWidth}` + 'rem',
    };

    this.addEventButtonPosition = {
      transform: 'translateX(' + `${buttonPosition}` + 'rem)',
    };

    const currentTime: number = timeIntoMinutes(String(new Date()));
    this.labelPosition = {
      position: 'absolute',
      right: '0',
      // plus room's header height (6.93rem)
      top: `${(currentTime - 420) * MINUTE_HEIGHT + 6.93}` + 'rem',
    };
  }

  addEvent() {
    this.dialog.open(EventDialogComponent);
  }
}
