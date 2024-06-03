import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MakeMahasiswaPageRoutingModule } from './make-mahasiswa-routing.module';

import { MakeMahasiswaPage } from './make-mahasiswa.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    MakeMahasiswaPageRoutingModule,
  ],
  declarations: [MakeMahasiswaPage],
})
export class MakeMahasiswaPageModule {}
