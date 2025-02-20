import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogCloseConfig, DialogData, DialogSizeConfig } from './global-dialog.model';
import { GlobalDialogComponent } from './global-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class GlobalDialogService {

  constructor(
    private _dialog: MatDialog
  ) { }

  public open(dialogData: DialogData, dialogSizeConfig?: DialogSizeConfig, dialogCloseConfig?: DialogCloseConfig): void {
    if (!dialogData) return;

    const openedDialogs = this._dialog.openDialogs;

    if (openedDialogs.length === 1) {
      openedDialogs[0].close();
    }

    this._dialog.open(GlobalDialogComponent, {
      data: dialogData,
      backdropClass: 'global-dialog-backdrop',
      width: dialogSizeConfig && dialogSizeConfig.width ? dialogSizeConfig.width : '50%',
      height: dialogSizeConfig && dialogSizeConfig.height ? dialogSizeConfig.height : '50%',
    });

    if (dialogCloseConfig && dialogCloseConfig.isAutoClose) {
      this.close(dialogCloseConfig);
    }
  }

  public close(dialogCloseConfig?: DialogCloseConfig): void {
    if (dialogCloseConfig) {
      setTimeout(() => {
        this._dialog.closeAll();
      }, dialogCloseConfig.autoCloseDelay);
    } else {
      this._dialog.closeAll();
    }
  }
}
