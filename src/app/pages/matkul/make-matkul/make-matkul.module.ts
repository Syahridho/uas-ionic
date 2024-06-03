import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MakeMatkulPageRoutingModule } from './make-matkul-routing.module';

import { MakeMatkulPage } from './make-matkul.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    MakeMatkulPageRoutingModule,
  ],
  declarations: [MakeMatkulPage],
})
export class MakeMatkulPageModule {}
