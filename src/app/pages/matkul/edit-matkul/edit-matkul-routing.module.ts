import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditMatkulPage } from './edit-matkul.page';

const routes: Routes = [
  {
    path: '',
    component: EditMatkulPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditMatkulPageRoutingModule {}
