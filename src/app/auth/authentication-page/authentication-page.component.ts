import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Validators, FormGroup, FormControl } from '@angular/forms';
import { ApiService } from 'src/app/scheduler/services/api.service';

@Component({
  selector: 'bs-authentication-page',
  templateUrl: './authentication-page.component.html',
  styleUrls: ['./authentication-page.component.scss'],
})
export class AuthenticationPageComponent implements OnInit {
  userDataGroup: FormGroup;
  hide = true;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.userDataGroup = new FormGroup({
      mail: new FormControl(null, [Validators.email, Validators.required]),
      pass: new FormControl(null, Validators.required),
    });
  }

  onSubmit() {
    this.apiService.getAccess(this.userDataGroup.value);
  }
}
