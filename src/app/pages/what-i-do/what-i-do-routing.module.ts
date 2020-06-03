import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WhatIDoPage } from './what-i-do.page';

const routes: Routes = [
  {
    path: '',
    component: WhatIDoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WhatIDoPageRoutingModule {}
