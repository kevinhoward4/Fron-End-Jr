import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  status: [];
  constructor(
) { }

  ngOnInit(): void {
    this.getData();
  }
  getData = async () => {
    const data = await fetch(
      "https://us-central1-cm-devops-294019.cloudfunctions.net/status"
    );
    const users = await data.json();
    console.log(users);
  };

}
