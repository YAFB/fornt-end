import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DescripcionservicioPageRoutingModule } from './descripcionservicio-routing.module';

import { DescripcionservicioPage } from './descripcionservicio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DescripcionservicioPageRoutingModule
  ],
  declarations: [DescripcionservicioPage]
})
export class DescripcionservicioPageModule {}
