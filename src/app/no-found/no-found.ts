import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-no-found',
  imports: [RouterLink],
  templateUrl: './no-found.html',
  styleUrl: './no-found.css'
})
export class NoFound {

  public main: boolean = true;

  constructor(private readonly _route:ActivatedRoute){
    this.main = _route.snapshot.data['main'] as boolean;
  }

}
