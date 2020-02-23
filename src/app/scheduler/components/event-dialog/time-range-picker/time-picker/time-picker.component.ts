import { Component, OnInit, Input, forwardRef } from '@angular/core';
import * as moment from 'moment';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormControl } from '@angular/forms';



@Component({
  selector: 'bs-time-picker',
  templateUrl: './time-picker.component.html',
  styleUrls: ['./time-picker.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TimePickerComponent),
      multi: true
    }
  ]
})
export class TimePickerComponent implements OnInit, ControlValueAccessor {
  @Input() formControl: FormControl;

  timesList: string[];

  ngOnInit() {
    this.timesList = this.timeInterval();
  }

  timeInterval() {
    const times = [];
    for (let i = 7; i < 24; i++) {
      times.push(moment({ hour: i }).format('HH:mm'));
      times.push(moment({ hour: i, minute: 15 }).format('HH:mm'));
      times.push(moment({ hour: i, minute: 30 }).format('HH:mm'));
      times.push(moment({ hour: i, minute: 45 }).format('HH:mm'));
    }
    return times;
  }



  writeValue(value: string): void {
  }
  registerOnChange(fn: any): void {
  }
  registerOnTouched(fn: any): void {
  }
}
