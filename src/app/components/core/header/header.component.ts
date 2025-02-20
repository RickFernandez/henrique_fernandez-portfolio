import { DialogCloseConfig } from './../../../shared/components/global-dialog/global-dialog.model';
import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { DialogData, DialogSizeConfig } from 'src/app/shared/components/global-dialog/global-dialog.model';
import { GlobalDialogService } from 'src/app/shared/components/global-dialog/global-dialog.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  menuOpened: boolean = false;

  constructor(
    private _authService: AuthService,
    private _dialogService: GlobalDialogService
  ) {}

  onOpenMenu() {
    this.menuOpened = !this.menuOpened;
  }

  onNavigation(): void {
    if (this._authService.navigationIsAllow) return;

    const dialogData: DialogData = {
      title: 'Navegação bloqueada',
      content: 'Se quer descobrir mais sobre mim, me vença no jokenpô! 🤓 \n Ou então, arregue e pule o jogo clicando no botão "Pular".',
      hasCloseButton: true
    }

    const dialogSizeConfig: DialogSizeConfig = {
      width: '40%',
      height: '40%'
    }

    const DialogCloseConfig: DialogCloseConfig = {
      isAutoClose: true,
      autoCloseDelay: 10000
    }

    this._dialogService.open(dialogData, dialogSizeConfig, DialogCloseConfig);
  }
}
