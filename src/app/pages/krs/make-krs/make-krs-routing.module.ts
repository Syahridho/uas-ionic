import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MakeKrsPage } from './make-krs.page';

const routes: Routes = [
  {
    path: '',
    component: MakeKrsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MakeKrsPageRoutingModule {}
