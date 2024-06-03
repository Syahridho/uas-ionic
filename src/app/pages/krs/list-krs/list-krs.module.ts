import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListKrsPageRoutingModule } from './list-krs-routing.module';

import { ListKrsPage } from './list-krs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListKrsPageRoutingModule
  ],
  declarations: [ListKrsPage]
})
export class ListKrsPageModule {}
