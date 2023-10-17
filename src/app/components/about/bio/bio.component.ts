import { Component } from '@angular/core';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.scss']
})
export class BioComponent {
  onResponsive: boolean = false;

  ngOnInit() {
    let screenWidth = window.innerWidth;
    screenWidth <= 768 ? this.onResponsive = !this.onResponsive : this.onResponsive;
  }
}
