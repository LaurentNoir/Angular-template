import { Component } from '@angular/core';
import { Title, TitleType } from '../../../shared/components/title/title'

@Component({
  selector: 'app-color',
  imports: [Title],
  templateUrl: './color.html',
  styleUrl: './color.css'
})
export class Color {
  public title: string = 'Color Utilities'
  public titleType: number = TitleType.SubTitle
  public text: string = "Bootstrap's default utility classes can be found on the official Bootstrap Documentation page. The custom utilities below were created to extend this theme past the default utility classes built into Bootstrap's framework."
}
