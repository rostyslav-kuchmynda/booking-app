import { MatDialog } from '@angular/material';
import { Component, Input, Output, EventEmitter, OnInit, MissingTranslationStrategy } from '@angular/core';
import { EventInterface } from '../../interfaces/event-interface';
import { timeIntoMinutes } from '../../services/timeIntoMinutes';
import { MINUTE_HEIGHT } from '../../constants';
import { EventInfoDialogComponent } from './event-info-dialog/event-info-dialog.component';

const SEVEN__MORNING_HOURS = 420;
const COLUMN_HEADER_HEIGHT = 6.93;

@Component({
  selector: 'bs-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.scss'],
})
export class EventCardComponent implements OnInit {
  @Input() card: EventInterface;
  @Input() cardBgColor?: string;
  @Input() roomIdNum: number;

  eventDuration: number;
  cardStyling: { [klass: string]: string };

  @Output() cardClick: EventEmitter<void> = new EventEmitter<void>();

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    this.eventDuration = timeIntoMinutes(this.card.end) - timeIntoMinutes(this.card.start);
    const cardHeight = this.eventDuration * MINUTE_HEIGHT;
    // include header's height (+7rem)
    const startPosition = (timeIntoMinutes(this.card.start) - SEVEN__MORNING_HOURS) * MINUTE_HEIGHT + COLUMN_HEADER_HEIGHT;

    if (!this.cardBgColor) {
      this.cardBgColor = '#54a3ff';
    }

    this.cardStyling = {
      'background-color': `${this.cardBgColor}50`,
      'box-shadow': `inset 4px 0 0 0 ${this.cardBgColor}`,
      position: 'absolute',
      top: `${startPosition}` + 'rem',
      height: cardHeight + 'rem',
    };
  }

  onCardClick() {
    this.dialog.open(EventInfoDialogComponent, { data: this.card });
  }
}
