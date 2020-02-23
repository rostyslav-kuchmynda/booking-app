import { Component, OnInit, Input } from '@angular/core';
import { EventInterface } from '../../../../interfaces/event-interface';
import { timeIntoMinutes } from 'src/app/scheduler/services/timeIntoMinutes';
import { Observable } from 'rxjs';
import { SelectedDateService } from 'src/app/scheduler/services/selectedDate.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'bs-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss'],
})
export class LabelComponent implements OnInit {
  @Input() events: EventInterface[];
  todayDisplayed$: Observable<boolean>;
  labelStyle: { [klass: string]: string };
  roomStatus: string;

  constructor(private selectedDateService: SelectedDateService) {}

  ngOnInit() {
    this.todayDisplayed$ = this.selectedDateService.compareDates();
    const currentTime: number = timeIntoMinutes(String(new Date()));

    this.roomStatus = 'vacant';
    this.labelStyle = {
      'background-color': '#00b8b2',
    };

    for (const event of this.events) {
      const startTime: number = timeIntoMinutes(event.start);
      const endTime: number = timeIntoMinutes(event.end);

      startTime <= currentTime && currentTime <= endTime ? (this.roomStatus = 'busy') : (this.roomStatus = 'vacant');
    }

    if (this.roomStatus === 'busy') {
      this.labelStyle = {
        'background-color': '#e0004d',
      };
    }
  }
}
