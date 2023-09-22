import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {

  onSideNav: boolean = false;
  sideType!: string;

  constructor(private location: Location) {}

  ngOnInit(): void {
    this.location.onUrlChange((url: string, state: unknown) => {
      url !== '/' && url !== '/home' ? this.onSideNav = true : this.onSideNav = false;
      if (url.includes('/about-me')) {
        this.sideType = '/about-me'
      }
      if (url.includes('/projects')) {
        this.sideType = '/projects'
      }
    });
  }
}
