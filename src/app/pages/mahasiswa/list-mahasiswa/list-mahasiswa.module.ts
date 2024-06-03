import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListMahasiswaPageRoutingModule } from './list-mahasiswa-routing.module';

import { ListMahasiswaPage } from './list-mahasiswa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListMahasiswaPageRoutingModule
  ],
  declarations: [ListMahasiswaPage]
})
export class ListMahasiswaPageModule {}
