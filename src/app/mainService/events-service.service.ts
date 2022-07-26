import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Events } from '../Events';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventsServiceService {
  private apiUrl = 'http://localhost:7500/events';

  constructor(private http: HttpClient) { }

  getEvents(): Observable<Events[]>{
    return this.http.get<Events[]>(this.apiUrl);
  }
}
