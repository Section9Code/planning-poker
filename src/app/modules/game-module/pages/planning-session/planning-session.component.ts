import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './planning-session.component.html',
  styleUrls: ['./planning-session.component.scss']
})
export class PlanningSessionComponent implements OnInit {
  sessionId?: string;

  constructor(public activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(params =>{
      this.sessionId = params['id'];
    });
  }

}
