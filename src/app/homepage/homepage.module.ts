import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomepageRoutingModule } from './homepage-routing.module';
import { HomepageComponent } from './components/homepage/homepage.component';
import { DmsMaterialsModule } from '../dms-materials/dms-materials.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DmsSharesModule } from '../dms-shares/dms-shares.module';


@NgModule({
  declarations: [
    HomepageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DmsSharesModule,
    DmsMaterialsModule,
    HomepageRoutingModule
  ]
})
export class HomepageModule { }
