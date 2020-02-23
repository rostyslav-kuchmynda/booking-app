import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'bs-delete-event-dialog',
  templateUrl: './delete-event-dialog.component.html',
  styleUrls: ['./delete-event-dialog.component.scss']
})
export class DeleteEventDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data) { }
}
