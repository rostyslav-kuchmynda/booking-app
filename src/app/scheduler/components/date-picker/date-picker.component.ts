import { Component, Output, EventEmitter, OnInit, Input, forwardRef } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material';
import { Moment } from 'moment';
import { NG_VALUE_ACCESSOR, FormControl, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'bs-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DatePickerComponent),
      multi: true
    }
  ]
})
export class DatePickerComponent implements OnInit, ControlValueAccessor {
  @Input() view: 'icon' | 'date' = 'date';
  @Input() date: Date;
  @Input() formControl: FormControl;
  @Output() selectedDate: EventEmitter<Date> = new EventEmitter<Date>();
  propagateChange: (value: Date) => {};

  ngOnInit() {
    if (!this.date) {
      this.date = new Date();
    }
  }

  onDateChange(type: string, event: MatDatepickerInputEvent<Moment>) {
    this.selectedDate.emit(event.value.toDate());
    this.propagateChange(event.value.toDate());
  }

  writeValue(value): void {
  }
  registerOnChange(fn): void {
    this.propagateChange = fn;
  }
  registerOnTouched(fn): void {
  }
}
