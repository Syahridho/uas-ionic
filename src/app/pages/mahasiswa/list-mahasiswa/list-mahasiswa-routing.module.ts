import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListMahasiswaPage } from './list-mahasiswa.page';

const routes: Routes = [
  {
    path: '',
    component: ListMahasiswaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListMahasiswaPageRoutingModule {}
