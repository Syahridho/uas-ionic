import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditMatkulPageRoutingModule } from './edit-matkul-routing.module';

import { EditMatkulPage } from './edit-matkul.page';

@NgModule({
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    EditMatkulPageRoutingModule,
  ],
  declarations: [EditMatkulPage],
})
export class EditMatkulPageModule {}
