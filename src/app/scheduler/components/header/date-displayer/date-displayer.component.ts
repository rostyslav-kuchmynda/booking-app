import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'bs-date-displayer',
  templateUrl: './date-displayer.component.html',
  styleUrls: ['./date-displayer.component.scss'],
})
export class DateDisplayerComponent implements OnInit {
  @Input() selectedDate: Date;

  ngOnInit() {
    if (!this.selectedDate) {
      this.selectedDate = new Date();
    }
  }
}
