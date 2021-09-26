import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { AvatarService } from '../../services/avatar.service';

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

  avatars: SafeHtml[] = [];

  constructor(private avatarSvc: AvatarService) { }

  ngOnInit(): void {
  }

  startSession() {
    console.log('Start session', this.sessionForm);

    // Make sure the form is valid
    if (this.sessionForm.invalid) return;
  }

  userNameChanged() {    
    this.generateAvatars();
  }

  generateAvatars() {
    if (this.sessionForm.controls.userName.valid) {
      this.avatars = this.avatarSvc.getAvatars(this.sessionForm.controls.userName.value);  
    } else {
      this.avatars = [];
    }
  }

}
