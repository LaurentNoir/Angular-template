import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from '../../core/header/header';
import { Footer } from '../../core/footer/footer';
import { Sidebar } from '../../core/sidebar/sidebar';


@Component({
  selector: 'app-admin',
  imports: [RouterOutlet, Header, Footer, Sidebar],
  templateUrl: './admin.html',
  styleUrl: './admin.css'
})
export class Admin {

}
