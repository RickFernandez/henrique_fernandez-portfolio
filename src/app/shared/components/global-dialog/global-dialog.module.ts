import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalDialogComponent } from './global-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';


@NgModule({
  declarations: [
    GlobalDialogComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule
  ]
})
export class GlobalDialogModule { }
