import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WhatIDoPageRoutingModule } from './what-i-do-routing.module';

import { WhatIDoPage } from './what-i-do.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WhatIDoPageRoutingModule
  ],
  declarations: [WhatIDoPage]
})
export class WhatIDoPageModule {}
