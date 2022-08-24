import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultRowComponent } from './components/result-row/result-row.component';
import { DmsMaterialsModule } from '../dms-materials/dms-materials.module';



@NgModule({
  declarations: [
    ResultRowComponent
  ],
  imports: [CommonModule, DmsMaterialsModule],
  exports: [ResultRowComponent],
})
export class DmsSharesModule { }
