import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bs-default-room-dialog',
  templateUrl: './default-room-dialog.component.html',
  styleUrls: ['./default-room-dialog.component.scss']
})
export class DefaultRoomDialogComponent implements OnInit {
  rooms: string[] = [
    'Summer',
    'Autumn',
    'Winter',
    'Spring'
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
