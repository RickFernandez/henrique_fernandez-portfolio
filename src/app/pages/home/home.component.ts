import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  onAnimate: boolean = false;
  winner!: string;
  userChoice: string = "rock";
  computerChoice: string = "rock";
  gameChoices: string[] = [
    'rock',
    'paper',
    'scissors'
  ];

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.onStartGame();
  }

  allowNavigation() {
    this.authService.navigationIsAllow = true;
  }

  onUserChoosing(userChoice: string): void {
    this.onAnimate = !this.onAnimate;
    console.log(userChoice);

    setTimeout(() => {
      this.userChoice = userChoice;

      this.onComputerChoosing();
      this.checkingWhoWon(this.userChoice, this.computerChoice);
      this.onAnimate = !this.onAnimate;
    }, 2000);
  }

  onComputerChoosing(): void {
    this.computerChoice = this.gameChoices[(Math.floor(Math.random() * this.gameChoices.length))];
  }

  checkingWhoWon(userChoice: string, computerChoice: string) {
    const choices: any = {
      rock: {
        beats: 'scissors',
        message: 'você'
      },
      paper: {
        beats: 'rock',
        message: 'você'
      },
      scissors: {
        beats: 'paper',
        message: 'você'
      }
    };

    if (!choices[userChoice] || !choices[computerChoice]) {
      this.winner = 'Escolha inválida';
      return;
    }

    setTimeout(() => {
      if (userChoice === computerChoice) {
        this.winner = 'empate';
      } else {
        if (choices[userChoice].beats === computerChoice) {
          this.winner = choices[userChoice].message;
          this.authService.navigationIsAllow = true;
        }
        else {
          this.winner = 'eu';
        }
      }
    }, 500);
  }

  onStartGame(): void {
    this.computerChoice = 'rock';
    this.userChoice = 'rock';
    this.winner = '';
  }
}
