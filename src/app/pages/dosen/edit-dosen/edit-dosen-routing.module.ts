import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditDosenPage } from './edit-dosen.page';

const routes: Routes = [
  {
    path: '',
    component: EditDosenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditDosenPageRoutingModule {}
