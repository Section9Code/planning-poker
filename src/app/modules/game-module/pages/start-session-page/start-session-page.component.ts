import { Component, OnInit } from '@angular/core';
import { SessionDetails } from '../../models/session-details';

@Component({
  templateUrl: './start-session-page.component.html',
  styleUrls: ['./start-session-page.component.scss']
})
export class StartSessionPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  StartSession(session: SessionDetails) {
    console.log('Start Sess', session);
  }

}
