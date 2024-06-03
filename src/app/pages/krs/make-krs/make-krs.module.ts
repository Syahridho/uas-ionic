import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MakeKrsPageRoutingModule } from './make-krs-routing.module';

import { MakeKrsPage } from './make-krs.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    MakeKrsPageRoutingModule,
  ],
  declarations: [MakeKrsPage],
})
export class MakeKrsPageModule {}