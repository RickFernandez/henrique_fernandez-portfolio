import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-certified-card',
  templateUrl: './certified-card.component.html',
  styleUrls: ['./certified-card.component.scss']
})
export class CertifiedCardComponent {
  @Input() certifieldName!: string;
  @Input() certifieldSrc!: string;
  @Input() certifieldUrl!: string;
}
