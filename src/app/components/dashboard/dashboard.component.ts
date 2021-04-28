import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  dateTraking: string
  currentStatus1: string
  currentStatus2: string
  barsStatus1: number
  barsStatus2: number
  porcen1: any
  constructor() { }

  ngOnInit(): void {
    this.getData();
  }
  getData = async () => {
    const data = await fetch(
      "https://us-central1-cm-devops-294019.cloudfunctions.net/status"
    );
    const users = await data.json();
    this.dateTraking = users.status.apis[0].tracking.title;
    this.currentStatus2 = users.status.apis[0].tracking.current_status;
    this.currentStatus1 = users.status.apis[1].authenticacion.current_status;
    this.barsStatus1 = users.status.apis[1].authenticacion.days;
    this.barsStatus2 = users.status.apis[0].tracking.days;
    this.porcen1 = users.status.apis[1].authenticacion.days[29];
  }
 }

