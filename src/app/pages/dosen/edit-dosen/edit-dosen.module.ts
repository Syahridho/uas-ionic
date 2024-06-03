import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditDosenPageRoutingModule } from './edit-dosen-routing.module';

import { EditDosenPage } from './edit-dosen.page';

@NgModule({
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    EditDosenPageRoutingModule,
  ],
  declarations: [EditDosenPage],
})
export class EditDosenPageModule {}
