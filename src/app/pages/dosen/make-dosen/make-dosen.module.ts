import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MakeDosenPageRoutingModule } from './make-dosen-routing.module';

import { MakeDosenPage } from './make-dosen.page';

@NgModule({
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    MakeDosenPageRoutingModule,
  ],
  declarations: [MakeDosenPage],
})
export class MakeDosenPageModule {}
