import { FooterModule } from './../footer/footer.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    FooterModule,
    MatDialogModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
