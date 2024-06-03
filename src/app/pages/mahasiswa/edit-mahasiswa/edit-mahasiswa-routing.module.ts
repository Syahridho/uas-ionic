import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditMahasiswaPage } from './edit-mahasiswa.page';

const routes: Routes = [
  {
    path: '',
    component: EditMahasiswaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditMahasiswaPageRoutingModule {}
