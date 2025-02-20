import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from './global-dialog.model';

@Component({
  selector: 'app-global-dialog',
  templateUrl: './global-dialog.component.html',
  styleUrls: ['./global-dialog.component.scss']
})
export class GlobalDialogComponent implements OnInit {
  public contents: string[] = [];

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  private formatContent(content: string): void {
    this.contents = content.split('\n');
  }

  ngOnInit(): void {
    if (this.data.content !== '') {
      this.formatContent(this.data.content);
    }
  }
}
