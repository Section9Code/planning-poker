import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameModuleRoutingModule } from './game-module-routing.module';
import { StartSessionPageComponent } from './pages/start-session-page/start-session-page.component';


@NgModule({
  declarations: [
    StartSessionPageComponent
  ],
  imports: [
    CommonModule,
    GameModuleRoutingModule
  ]
})
export class GameModuleModule { }
