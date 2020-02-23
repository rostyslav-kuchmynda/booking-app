import { Component, ViewEncapsulation, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material';
import * as moment from 'moment';
import { FirebaseService } from '../../services/firebase.service';
import { RoomInterface } from '../../interfaces/room-interface';
import { LocalStorageService } from '../../services/local-storage.service';
import { CardData } from '../../interfaces/CardDataInterface';
import { ApiService } from '../../services/api.service';

const CURRENT_TIME = moment();
const TIME_STEP = 15;
const REMAINDER = TIME_STEP - (CURRENT_TIME.minute() % TIME_STEP);

@Component({
  selector: 'bs-event-dialog',
  templateUrl: './event-dialog.component.html',
  styleUrls: ['./event-dialog.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class EventDialogComponent implements OnInit {
  dialogTitle: string;
  newEventForm: FormGroup;

  startAtTime: string;
  finishAtTime: string;

  eventTimeStart: string;
  eventTimeEnd: string;

  defaultData: CardData = {
    title: '',
    start: this.startAtTime,
    end: this.finishAtTime,
    room: '',
    members: [],
    message: '',
    updated: '',
    id: '',
  };

  rooms: RoomInterface[] = this.localStorageService.getSelectedRooms();

  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    private localStorageService: LocalStorageService,
    private apiService: ApiService
  ) {}

  ngOnInit() {
    this.dialogTitle = `${this.data ? 'Edit' : 'New'} Event`;

    const { title, start, end, room, message }: CardData = this.data || this.defaultData;

    this.defineTimeRange();

    this.newEventForm = new FormGroup({
      eventTitle: new FormControl(title, Validators.maxLength(40)),
      timeRange: new FormGroup({
        datePicker: new FormControl(new Date(start)),
        startAtTime: new FormControl(this.eventTimeStart || this.startAtTime, Validators.required),
        finishAtTime: new FormControl(this.eventTimeEnd || this.finishAtTime, Validators.required),
      }),
      meetingRoom: new FormControl(room, Validators.required),
      description: new FormControl(message, Validators.maxLength(200)),
    });
  }

  defineTimeRange() {
    this.startAtTime = moment(CURRENT_TIME)
      .add(REMAINDER, 'minutes')
      .format('HH:mm');
    this.finishAtTime = moment(this.startAtTime, 'HH:mm')
      .add(60, 'minutes')
      .format('HH:mm');
    if (this.data) {
      this.eventTimeStart = moment(this.data.start).format('HH:mm');
      this.eventTimeEnd = moment(this.data.end).format('HH:mm');
    }
  }

  onSubmit() {
    this.apiService.addEvent(this.newEventForm.value);
    console.log(this.newEventForm.value);
  }
}
