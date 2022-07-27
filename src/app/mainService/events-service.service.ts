import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Events } from '../Events';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventsServiceService {
  private apiUrl = 'http://localhost:7500/events';

  public subjectDate = new Subject<any>();
  public currentlyEvent$ = this.subjectDate.asObservable();

  constructor(private http: HttpClient) { }

  getEvents(): Observable<Events[]>{
    return this.http.get<Events[]>(this.apiUrl);
  }

  emitData(data: any){
    this.subjectDate.next(data)
  }

}
