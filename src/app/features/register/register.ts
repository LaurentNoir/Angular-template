import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
import { loginServiceToken, ILoginService } from '../../core/services/abstracts/ILoginService';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-register',
  imports: [],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {

  private _bodyElement: HTMLBodyElement | undefined;

  constructor(
    @Inject(loginServiceToken) private readonly _loginService: ILoginService, 
    private readonly _formBuilder: FormBuilder,
    @Inject(PLATFORM_ID) private platformId: Object,
    private readonly _route: Router){
    
  }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this._bodyElement = document.getElementsByTagName('body').item(0) as HTMLBodyElement;
      if (this._bodyElement) {
        this._bodyElement.className = 'bg-gradient-primary';
      }
    }
  }

  ngOnDestroy(): void {
    if (isPlatformBrowser(this.platformId)) {
      if(this._bodyElement != undefined) { 
        this._bodyElement!.className = ''; 
      }
    }
  }
}
