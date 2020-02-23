import { Component, OnInit } from '@angular/core';
import { ScrollingService } from '../../../services/timelineScroll.service';
import { MINUTE_HEIGHT } from 'src/app/scheduler/constants';
import { timeIntoMinutes } from 'src/app/scheduler/services/timeIntoMinutes';
import { SelectedDateService } from 'src/app/scheduler/services/selectedDate.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'bs-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss'],
  providers: [ScrollingService],
})
export class TimelineComponent implements OnInit {
  today: string = new Date().toISOString();
  currentTime: number;
  timePosition: { [klass: string]: string };
  todayDisplayed$: Observable<boolean>;

  constructor(private scrollingService: ScrollingService, private selectedDateService: SelectedDateService) {}
  ngOnInit() {
    this.todayDisplayed$ = this.selectedDateService.compareDates();

    this.currentTime = timeIntoMinutes(this.today);
    this.timePosition = {
      position: 'absolute',
      top: `${(this.currentTime - 420) * MINUTE_HEIGHT}` + 'rem',
    };

    setTimeout(() => {
      this.scrollingService.scrollToCurrentHour();
    }, 500);
  }
}
