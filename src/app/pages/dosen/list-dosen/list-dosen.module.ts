import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListDosenPageRoutingModule } from './list-dosen-routing.module';

import { ListDosenPage } from './list-dosen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListDosenPageRoutingModule
  ],
  declarations: [ListDosenPage]
})
export class ListDosenPageModule {}
