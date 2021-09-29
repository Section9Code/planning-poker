import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameModuleRoutingModule } from './game-module-routing.module';
import { StartSessionPageComponent } from './pages/start-session-page/start-session-page.component';
import { StartSessionFormComponent } from './components/start-session-form/start-session-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AvatarService } from './services/avatar.service';
import { DataService } from './services/data.service';
import { PlanningSessionComponent } from './pages/planning-session/planning-session.component';


@NgModule({
  declarations: [
    StartSessionPageComponent,
    StartSessionFormComponent,
    PlanningSessionComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    GameModuleRoutingModule
  ],
  providers: [
    AvatarService,
    DataService
  ]
})
export class GameModuleModule { }
