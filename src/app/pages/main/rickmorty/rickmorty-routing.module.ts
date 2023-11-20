import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RickmortyPage } from './rickmorty.page';

const routes: Routes = [
  {
    path: '',
    component: RickmortyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RickmortyPageRoutingModule {}
