import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServiciotrabajadorPageRoutingModule } from './serviciotrabajador-routing.module';

import { ServiciotrabajadorPage } from './serviciotrabajador.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ServiciotrabajadorPageRoutingModule
  ],
  declarations: [ServiciotrabajadorPage]
})
export class ServiciotrabajadorPageModule {}
