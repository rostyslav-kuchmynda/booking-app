import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RoomListDialogComponent } from './room-list-dialog/room-list-dialog.component';

import { MatDialog } from '@angular/material';

import { AuthService } from 'angularx-social-login';
import { DefaultRoomDialogComponent } from './default-room-dialog/default-room-dialog.component';

@Component({
  selector: 'bs-header-settings-gear',
  templateUrl: './header-settings-gear.component.html',
  styleUrls: ['./header-settings-gear.component.scss'],
})
export class HeaderSettingsGearComponent {
  constructor(private authService: AuthService, private router: Router, public dialog: MatDialog) {}

  onSignOut() {
    localStorage.clear();
    this.router.navigate(['auth']);
  }

  openRoomListDialog() {
    this.dialog.open(RoomListDialogComponent);
  }
}
