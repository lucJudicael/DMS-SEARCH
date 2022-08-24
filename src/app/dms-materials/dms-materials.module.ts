import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AvatarModule } from 'ngx-avatar';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AvatarModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatTableModule,
    MatButtonModule,
    FlexLayoutModule,
    MatPaginatorModule,
    MatFormFieldModule,
  ],
  exports: [
    AvatarModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    MatTableModule,
    MatInputModule,
    MatButtonModule,
    FlexLayoutModule,
    MatPaginatorModule,
    MatFormFieldModule,
  ],
})
export class DmsMaterialsModule { }
