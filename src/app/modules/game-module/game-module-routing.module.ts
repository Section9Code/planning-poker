import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StandardLayoutComponent } from 'src/app/layouts/standard-layout/standard-layout.component';
import { StartSessionPageComponent } from './pages/start-session-page/start-session-page.component';

const routes: Routes = [
  { path: '', component: StandardLayoutComponent, children: [
      { path: 'start', component: StartSessionPageComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GameModuleRoutingModule { }
