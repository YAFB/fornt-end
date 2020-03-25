import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServiciotrabajadorPage } from './serviciotrabajador.page';

const routes: Routes = [
  {
    path: '',
    component: ServiciotrabajadorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServiciotrabajadorPageRoutingModule {}
