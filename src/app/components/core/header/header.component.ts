import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  menuOpened: boolean = false;

  constructor(private authService: AuthService) {}

  onOpenMenu() {
    this.menuOpened = !this.menuOpened;
  }

  onNavigation(): void {
    if (this.authService.navigationIsAllow) return
      alert('Ops... Navegação bloqueada. Vença de mim no jogo para liberá-la. 🤓');
  }
}
