import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditKrsPage } from './edit-krs.page';

const routes: Routes = [
  {
    path: '',
    component: EditKrsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditKrsPageRoutingModule {}
