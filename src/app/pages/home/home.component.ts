import { Component } from '@angular/core';

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

  ngOnInit(): void {
    this.onStartGame();
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
        this.winner = choices[userChoice].beats === computerChoice ? choices[userChoice].message : 'eu';
      }
    }, 500);
  }

  onStartGame(): void {
    this.computerChoice = 'rock';
    this.userChoice = 'rock';
    this.winner = '';
  }
}
