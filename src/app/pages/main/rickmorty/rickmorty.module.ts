import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RickmortyPageRoutingModule } from './rickmorty-routing.module';

import { RickmortyPage } from './rickmorty.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RickmortyPageRoutingModule,
    SharedModule,
  ],
  declarations: [RickmortyPage]
})
export class RickmortyPageModule {}
