import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListKrsPage } from './list-krs.page';

const routes: Routes = [
  {
    path: '',
    component: ListKrsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListKrsPageRoutingModule {}
