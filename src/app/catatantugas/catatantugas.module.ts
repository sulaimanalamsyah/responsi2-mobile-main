import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CatatanPageRoutingModule } from './catatantugas-routing.module';

import { CatatanPage } from './catatantugas.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, CatatanPageRoutingModule],
  declarations: [CatatanPage],
})
export class CatatanPageModule {}
