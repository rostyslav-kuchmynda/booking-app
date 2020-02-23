import { Injectable } from '@angular/core';
import { FirebaseService } from './firebase.service';
import { RoomInterface } from '../interfaces/room-interface';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  selectedRoomIDs: string[] = JSON.parse(localStorage.getItem('selectedRooms'));
  roomsArray: RoomInterface[] = JSON.parse(localStorage.getItem('roomList'));

  getSelectedRooms() {
    const newArr = [];
    if (this.selectedRoomIDs) {
      for (const selected of this.selectedRoomIDs) {
        this.roomsArray.forEach(room => {
          if (room.id === selected) {
            newArr.push(room);
          }
        });
      }
    }
    return newArr;
  }
}
