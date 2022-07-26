import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActiveEventClickedComponent } from './active-event-clicked/active-event-clicked.component';
import { EventsListComponent } from './events-list/events-list.component';

const routes: Routes = [
  {path: '', component: EventsListComponent},
  {path: 'activeEvent', component: ActiveEventClickedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
