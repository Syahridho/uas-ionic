import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListMatkulPageRoutingModule } from './list-matkul-routing.module';

import { ListMatkulPage } from './list-matkul.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListMatkulPageRoutingModule
  ],
  declarations: [ListMatkulPage]
})
export class ListMatkulPageModule {}
