import { Component, OnInit } from '@angular/core';
import { Events } from '../Events';
import { EventsServiceService } from '../mainService/events-service.service';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {
  event: Events[] = []

  constructor(private eventsService: EventsServiceService) { }

  ngOnInit(): void {
    this.eventsService.getEvents().subscribe(event => this.event = event);
  }

  click(){
    console.log(this.event)
  }

}
