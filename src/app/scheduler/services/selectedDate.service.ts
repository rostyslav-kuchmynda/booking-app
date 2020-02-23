import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SelectedDateService {
  private selectedDateSubject: BehaviorSubject<Date> = new BehaviorSubject<Date>(new Date());

  constructor() {}

  updateSelectedDate(date: Date) {
    this.selectedDateSubject.next(date);
  }

  get selectedDate$(): Observable<Date> {
    return this.selectedDateSubject.asObservable();
  }

  compareDates(): Observable<boolean> {
    return this.selectedDate$.pipe(
      map(date => {
        const receivedDate = new Date(date.setHours(2, 0, 0, 0)).toISOString().split('T')[0];
        return receivedDate === new Date().toISOString().split('T')[0];
      })
    );
  }
}
