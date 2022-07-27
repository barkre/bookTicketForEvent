import { Component, OnInit } from '@angular/core';
import { EventsServiceService } from '../mainService/events-service.service';

@Component({
  selector: 'app-active-event-clicked',
  templateUrl: './active-event-clicked.component.html',
  styleUrls: ['./active-event-clicked.component.css']
})
export class ActiveEventClickedComponent implements OnInit {
  event!: any;

  constructor(private serviceData: EventsServiceService) { }

  ngOnInit(): void {
   this.serviceData.currentlyEvent$.subscribe((data) => {
      console.log(data)
    })
  }

  eventTest(){
    console.log(this.event)
  }

}
