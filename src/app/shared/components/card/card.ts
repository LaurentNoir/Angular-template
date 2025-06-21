import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.css'
})
export class Card {
  @Input() title: string = '';
  @Input() body: string = '';
  @Input() icon: string = '';
  @Input() classCard: string = '';
  @Input() alert: string = '';
  @Input() type: string = '';
  @Input() value: number = 0;
}
