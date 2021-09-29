import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SafeHtml } from '@angular/platform-browser';
import { SessionDetails } from '../../models/session-details';
import { AvatarService } from '../../services/avatar.service';

@Component({
  selector: 'app-start-session-form',
  templateUrl: './start-session-form.component.html',
  styleUrls: ['./start-session-form.component.scss']
})
export class StartSessionFormComponent implements OnInit {
  @Output() sessionSubmitted = new EventEmitter<SessionDetails>();

  sessionForm = new FormGroup({
    sessionName: new FormControl('', Validators.required),
    userName: new FormControl('', Validators.required)
  });

  avatar?: SafeHtml;


  constructor(private avatarSvc: AvatarService) { }

  ngOnInit(): void {
  }

  startSession() {
    console.log('Start session', this.sessionForm);

    // Make sure the form is valid
    if (this.sessionForm.invalid) return;

    // Send the session details
    let session: SessionDetails = {
      sessionName: this.sessionForm.controls.sessionName.value,
      userName: this.sessionForm.controls.userName.value,
      avatarType: 1
    }
    this.sessionSubmitted.emit(session);
  }

  userNameChanged() {    
    this.generateAvatars();
  }

  generateAvatars() {
    if (this.sessionForm.controls.userName.valid) {
      //this.avatars = this.avatarSvc.getAvatars(this.sessionForm.controls.userName.value);
      this.avatar = this.avatarSvc.getInitialsAvatar(this.sessionForm.controls.userName.value);  
    } else {
      this.avatar = undefined;
    }
  }

}
function Out() {
  throw new Error('Function not implemented.');
}

