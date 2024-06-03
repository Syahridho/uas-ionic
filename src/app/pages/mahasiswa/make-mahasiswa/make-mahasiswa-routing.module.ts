import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MakeMahasiswaPage } from './make-mahasiswa.page';

const routes: Routes = [
  {
    path: '',
    component: MakeMahasiswaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MakeMahasiswaPageRoutingModule {}
