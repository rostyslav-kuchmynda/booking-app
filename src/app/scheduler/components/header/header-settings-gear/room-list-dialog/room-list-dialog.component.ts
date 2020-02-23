import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/scheduler/services/firebase.service';
import { RoomInterface } from 'src/app/scheduler/interfaces/room-interface';

@Component({
  selector: 'bs-room-list-dialog',
  templateUrl: './room-list-dialog.component.html',
  styleUrls: ['./room-list-dialog.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class RoomListDialogComponent {
  selectedRooms: string[] = [];
  maxRooms = 4;
  rooms: RoomInterface[] = this.firebaseService.getRooms();

  constructor(private firebaseService: FirebaseService) {}

  onSaveRooms() {
    localStorage.setItem('selectedRooms', JSON.stringify(this.selectedRooms));
    location.reload();
  }
}
