import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MakeMatkulPage } from './make-matkul.page';

const routes: Routes = [
  {
    path: '',
    component: MakeMatkulPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MakeMatkulPageRoutingModule {}
