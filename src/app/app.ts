import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Card } from './shared/components/card/card';
import { Sidebar } from './core/sidebar/sidebar';
import { Header } from './core/header/header';
import { Footer } from "./core/footer/footer";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',

})
export class App {
  protected title = 'angular-template';
}
