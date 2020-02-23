import { Component, OnInit } from '@angular/core';
import { SelectedDateService } from '../../services/selectedDate.service';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'bs-scheduler',
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.scss'],
  providers: [SelectedDateService, FirebaseService],
})
export class SchedulerComponent implements OnInit {
  ngOnInit() {}
}
