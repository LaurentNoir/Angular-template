import { Component } from '@angular/core';
import { Title, TitleType } from '../../../shared/components/title/title';

@Component({
  selector: 'app-card',
  imports: [Title],
  templateUrl: './card.html',
  styleUrl: './card.css'
})
export class Card {
  public title: string = 'Cards';
  public titleType: number = TitleType.Title;
}
