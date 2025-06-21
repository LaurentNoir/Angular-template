import { Component } from '@angular/core';
import { Title } from '../../../shared/components/title/title'

@Component({
  selector: 'app-dashboard',
  imports: [Title],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {
  public title: string = 'Dashboard';
}
