import { Pipe, PipeTransform } from '@angular/core';
import { EventInterface } from '../interfaces/event-interface';
import { RoomInterface } from '../interfaces/room-interface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Pipe({
  name: 'filterEvents',
})
export class FilterEventsPipe implements PipeTransform {
  transform(events: Observable<EventInterface[]>, room: RoomInterface): Observable<EventInterface[]> {
    return events.pipe(map(arr => arr.filter(event => event.room === room.id)));
  }
}
