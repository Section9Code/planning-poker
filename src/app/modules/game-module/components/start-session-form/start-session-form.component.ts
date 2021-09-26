import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-start-session-form',
  templateUrl: './start-session-form.component.html',
  styleUrls: ['./start-session-form.component.scss']
})
export class StartSessionFormComponent implements OnInit {

  sessionForm = new FormGroup({
    sessionName: new FormControl('', Validators.required),
    userName: new FormControl('', Validators.required)
  });


  constructor() { }

  ngOnInit(): void {
  }

  startSession() {
    console.log('Start session', this.sessionForm);
    
    // Make sure the form is valid
    if(this.sessionForm.invalid) return;
    

  }

}
