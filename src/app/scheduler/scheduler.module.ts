import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { HeaderComponent } from './components/header/header.component';
import { DateDisplayerComponent } from './components/header/date-displayer/date-displayer.component';
import { DateSwitcherComponent } from './components/header/date-switcher/date-switcher.component';
import { DatePickerComponent } from '../scheduler/components/date-picker/date-picker.component';
import { HeaderSettingsGearComponent } from './components/header/header-settings-gear/header-settings-gear.component';
import { EventCardComponent } from './components/event-card/event-card.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { ColumnComponent } from './components/calendar/column/column.component';
import { TimelineComponent } from './components/calendar/timeline/timeline.component';
import { LabelComponent } from './components/calendar/column/label/label.component';
import { RoomListDialogComponent } from './components/header/header-settings-gear/room-list-dialog/room-list-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SchedulerComponent } from './components/scheduler/scheduler.component';
import { SelectedDateService } from './services/selectedDate.service';
import { EventDialogComponent } from './components/event-dialog/event-dialog.component';
import { TimeRangePickerComponent } from './components/event-dialog/time-range-picker/time-range-picker.component';
import { TimePickerComponent } from './components/event-dialog/time-range-picker/time-picker/time-picker.component';
import { EventInfoDialogComponent } from './components/event-card/event-info-dialog/event-info-dialog.component';
import { DeleteEventDialogComponent } from './components/event-card/event-info-dialog/delete-event-dialog/delete-event-dialog.component';
import { DefaultRoomDialogComponent } from './components/header/header-settings-gear/default-room-dialog/default-room-dialog.component';
import { FilterEventsPipe } from './pipes/filter-events.pipe';

@NgModule({
  declarations: [
    HeaderComponent,
    DateDisplayerComponent,
    DateSwitcherComponent,
    DatePickerComponent,
    HeaderSettingsGearComponent,
    EventCardComponent,
    RoomListDialogComponent,
    EventDialogComponent,
    TimeRangePickerComponent,
    TimePickerComponent,
    SchedulerComponent,
    CalendarComponent,
    ColumnComponent,
    TimelineComponent,
    LabelComponent,
    EventInfoDialogComponent,
    DeleteEventDialogComponent,
    SchedulerComponent,
    DefaultRoomDialogComponent,
    FilterEventsPipe,
  ],
  imports: [SharedModule, FormsModule, ReactiveFormsModule],
  exports: [HeaderComponent, EventCardComponent, CalendarComponent, ColumnComponent],
  entryComponents: [
    RoomListDialogComponent,
    EventDialogComponent,
    EventInfoDialogComponent,
    DeleteEventDialogComponent,
    DefaultRoomDialogComponent,
    TimeRangePickerComponent,
    TimePickerComponent,
  ],
  providers: [SelectedDateService],
})
export class SchedulerModule {}
