import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { SelectedDateService } from './selectedDate.service';
import { Observable } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import { RoomInterface } from '../interfaces/room-interface';
import { EventInterface } from '../interfaces/event-interface';

const DAY_IN_MILLISECONDS = 24 * 60 * 60 * 1000;
const BASE_PATH = '/tm-calendar';
const OWNER = 'Marcus';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  constructor(private database: AngularFireDatabase, private selectedDateService: SelectedDateService) {}

  getRooms() {
    const arrList: RoomInterface[] = [];
    this.database
      .list<RoomInterface>(`${BASE_PATH}/${OWNER}/rooms`)
      .valueChanges()
      .pipe(map(arr => arr.filter(room => room.name !== 'trainnig@testmagic.xyz')))
      .subscribe(arr => {
        arr.forEach(room => arrList.push(room));
        localStorage.setItem('roomList', JSON.stringify(arrList));
      });
    return arrList;
  }

  getEvents$(): Observable<EventInterface[]> {
    const date$: Observable<Date> = this.selectedDateService.selectedDate$;
    const dateWithEvents$ = date$.pipe(
      switchMap(thisDate => {
        return this.database
          .list<EventInterface>(`${BASE_PATH}/${OWNER}/events`, ref =>
            ref
              .orderByChild('start')
              .startAt(new Date(thisDate.setHours(0, 0, 0, 0)).toISOString(), 'start')
              .endAt(`${new Date(Date.parse(thisDate.toISOString()) + DAY_IN_MILLISECONDS).toISOString()}`, 'start')
          )
          .valueChanges();
      })
    );
    return dateWithEvents$;
  }
}
