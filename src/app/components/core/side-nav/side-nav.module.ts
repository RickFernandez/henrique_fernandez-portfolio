import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavComponent } from './side-nav.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SideNavComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    SideNavComponent
  ]
})
export class SideNavModule { }
