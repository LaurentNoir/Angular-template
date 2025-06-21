import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login implements OnInit, OnDestroy {

  private _bodyElement: HTMLBodyElement | undefined;

  ngOnInit(): void {
    this._bodyElement = document.getElementsByTagName('body').item(0) as HTMLBodyElement
    this._bodyElement.className = 'bg-gradient-primary';
  }

  ngOnDestroy(): void {
     this._bodyElement!.className = 'bg-gradient-primary';
  }

}
