import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ScrollingService } from 'src/app/scheduler/services/timelineScroll.service';

const DAY_OFFSET = 1;

@Component({
  selector: 'bs-date-switcher',
  templateUrl: './date-switcher.component.html',
  styleUrls: ['./date-switcher.component.scss'],
  providers: [ScrollingService],
})
export class DateSwitcherComponent implements OnInit {
  constructor(private scrollingService: ScrollingService) {}

  @Input() selectedDate: Date;
  @Output() dateChange: EventEmitter<Date> = new EventEmitter<Date>();

  ngOnInit() {
    if (!this.selectedDate) {
      this.selectedDate = new Date();
    }
    this.scrollingService.scrollToCurrentHour();
  }

  setPrevious(): void {
    const prevDayOffset = this.selectedDate.getDate() - DAY_OFFSET;
    const prevDayTimestamp = this.selectedDate.setDate(prevDayOffset);
    const prevDay = new Date(prevDayTimestamp);

    this.selectedDate = prevDay;
    this.dateChange.emit(prevDay);
  }

  setToday(): void {
    this.selectedDate = new Date();
    this.dateChange.emit(this.selectedDate);
    this.scrollingService.scrollToCurrentHour();
  }

  setNext(): void {
    const nextDayOffset = this.selectedDate.getDate() + DAY_OFFSET;
    const nextDayTimestamp = this.selectedDate.setDate(nextDayOffset);
    const nextDay = new Date(nextDayTimestamp);

    this.selectedDate = nextDay;
    this.dateChange.emit(nextDay);
  }
}
