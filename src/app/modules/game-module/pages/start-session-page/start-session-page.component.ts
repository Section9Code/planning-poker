import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionDetails } from '../../models/session-details';
import { SessionDataService } from '../../services/session-data.service';

@Component({
  templateUrl: './start-session-page.component.html',
  styleUrls: ['./start-session-page.component.scss']
})
export class StartSessionPageComponent implements OnInit {

  constructor(private sessionSvc: SessionDataService, private router: Router) { }

  ngOnInit(): void {
  }

  async StartSession(session: SessionDetails) {
    const id = await this.sessionSvc.StartSession(session);
    console.log(`Started session ${id}`);
    this.router.navigate(['/session',id]);
  }

}
