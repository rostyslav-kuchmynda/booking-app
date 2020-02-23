import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EventInterface } from '../interfaces/event-interface';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  tokens;

  constructor(private http: HttpClient, private router: Router) {}

  getAccess(userData: { [key: string]: string }) {
    this.http
      .post<{ accessToken: string; refreshToken: string }>('/api/owner/login', JSON.stringify(userData))
      .subscribe(result => {
        console.log(userData, result);
        this.router.navigate(['calendar']);
        // if (result.accessToken) {
        //   this.tokens = result;
        //   this.router.navigate(['calendar']);
        // } else {
        //   alert('User data is invalid');
        // }
      });
  }

  get accessTokens() {
    return this.tokens;
  }

  addEvent(eventBody: EventInterface) {
    this.http.post('/api/event', eventBody);
  }

  editEvent(id: string, body: { [key: string]: EventInterface }) {
    this.http.patch(`/api/event/${id}`, body);
  }

  deleteEvent(id: string) {
    this.http.delete(`/api/event/${id}`);
  }
}
