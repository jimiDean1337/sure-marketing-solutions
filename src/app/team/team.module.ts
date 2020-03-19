import { NgModule } from '@angular/core';
import { TeamComponent } from './team.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [TeamComponent],
  imports: [
    SharedModule
  ]
})
export class TeamModule { }
