import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListMatkulPage } from './list-matkul.page';

const routes: Routes = [
  {
    path: '',
    component: ListMatkulPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListMatkulPageRoutingModule {}
