import { Component, OnInit } from '@angular/core';
import { ApiStatus } from 'src/app/models/api-status';
import { ApiStatusService } from '../../services/api-status.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  lastUpdatedd : string
  constructor() { }

  ngOnInit(): void {
    this.getData();
  }
  getData = async () => {
    const data = await fetch(
      "https://us-central1-cm-devops-294019.cloudfunctions.net/status"
    );
    const users = await data.json();
    this.lastUpdatedd = users.last_updated;
  }
  }

