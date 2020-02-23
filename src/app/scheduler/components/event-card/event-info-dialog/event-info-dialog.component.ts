import { Component, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { EventDialogComponent } from '../../event-dialog/event-dialog.component';
import { DeleteEventDialogComponent } from './delete-event-dialog/delete-event-dialog.component';

@Component({
  selector: 'bs-event-info-dialog',
  templateUrl: './event-info-dialog.component.html',
  styleUrls: ['./event-info-dialog.component.scss']
})
export class EventInfoDialogComponent {

  constructor(
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data
  ) { }

  openEditDialog() {
    this.dialog.open(EventDialogComponent, { data: this.data });
  }

  openDeleteDialog() {
    this.dialog.open(DeleteEventDialogComponent, { data: this.data });
  }
}
