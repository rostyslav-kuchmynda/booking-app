import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { SelectedDateService } from '../../services/selectedDate.service';

@Component({
  selector: 'bs-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  date: Date = new Date();

  constructor(private selectedDateService: SelectedDateService, public dialog: MatDialog) { }

  ngOnInit() {
    this.selectedDateService.updateSelectedDate(new Date());
  }

  onDateChange(event: Date): Date {
    this.selectedDateService.updateSelectedDate(new Date(event));
    return (this.date = new Date(event));
  }
}
