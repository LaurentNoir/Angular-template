import { Component } from '@angular/core';
import { Title, TitleType } from '../../../shared/components/title/title';

@Component({
  selector: 'app-button',
  imports: [Title],
  templateUrl: './button.html',
  styleUrl: './button.css'
})
export class Button {
  public title: string = 'Buttons';
  public titleType: number = TitleType.Title;
  
}
