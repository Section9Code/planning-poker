import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StandardLayoutComponent } from 'src/app/layouts/standard-layout/standard-layout.component';
import { PlanningSessionComponent } from './pages/planning-session/planning-session.component';
import { StartSessionPageComponent } from './pages/start-session-page/start-session-page.component';

const routes: Routes = [
  { path: '', component: StandardLayoutComponent, children: [
      { path: 'start', component: StartSessionPageComponent },
      { path: ':id', component: PlanningSessionComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GameModuleRoutingModule { }
