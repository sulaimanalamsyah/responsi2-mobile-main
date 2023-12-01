import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CatatanPage } from './catatantugas.page';

const routes: Routes = [
  {
    path: '',
    component: CatatanPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CatatanPageRoutingModule {}
