import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DescripcionservicioPage } from './descripcionservicio.page';

const routes: Routes = [
  {
    path: '',
    component: DescripcionservicioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DescripcionservicioPageRoutingModule {}
