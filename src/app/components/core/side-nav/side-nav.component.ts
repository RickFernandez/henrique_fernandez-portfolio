import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent {

  @Input() sideType!: string;
  @Output() filterChanged = new EventEmitter<string[]>();

  contactMenu: boolean = true;
  personalMenu: boolean = true;
  projectMenu: boolean = true;

  filterOptions = [
    { label: 'HTML', value: 'html', image: 'assets/icons/html-icon.svg', selected: false },
    { label: 'CSS', value: 'css', image: 'assets/icons/css-icon.svg', selected: false },
    { label: 'SCSS', value: 'scss', image: 'assets/icons/sass-icon.svg', selected: false },
    { label: 'Javascript', value: 'javascript', image: 'assets/icons/javascript-icon.svg', selected: false },
    { label: 'Typescript', value: 'typescript', image: 'assets/icons/typescript-icon.svg', selected: false },
    { label: 'Angular', value: 'angular', image: 'assets/icons/angular-icon.svg', selected: false },
    // Adicione mais opções conforme necessário
  ];


  onPersonalMenu() {
    this.personalMenu = !this.personalMenu;
  }

  onContactMenu() {
    this.contactMenu = !this.contactMenu;
  }

  onProjectMenu() {
    this.projectMenu = !this.projectMenu;
  }

  updateFilter(option: any) {
    console.log(option.selected);

    option.selected = !option.selected;

    const selectedFilters = this.filterOptions
      .filter((opt) => opt.selected)
      .map((opt) => opt.value);

      console.log(selectedFilters);

    this.filterChanged.emit(selectedFilters);
  }
}
