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

  // jupi: any;

  sendData(data: any){
    // this.jupi = data
    console.log(data)
    this.eventsService.emitData(data)
  }

}
