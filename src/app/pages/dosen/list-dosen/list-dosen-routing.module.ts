import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListDosenPage } from './list-dosen.page';

const routes: Routes = [
  {
    path: '',
    component: ListDosenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListDosenPageRoutingModule {}
