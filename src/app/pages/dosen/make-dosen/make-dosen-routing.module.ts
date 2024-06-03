import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MakeDosenPage } from './make-dosen.page';

const routes: Routes = [
  {
    path: '',
    component: MakeDosenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MakeDosenPageRoutingModule {}
