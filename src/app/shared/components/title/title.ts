import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-title',
  imports: [],
  templateUrl: './title.html',
  styleUrl: './title.css'
})
export class Title {
  public titleType = TitleType
  @Input() title: string = '';
  @Input() selectedTitleType: number = this.titleType.None;
  @Input() text: string = '';

}

export enum TitleType {
  None,
  Link,
  SubTitle
}