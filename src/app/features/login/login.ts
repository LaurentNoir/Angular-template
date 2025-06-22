import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { loginServiceToken, ILoginService } from '../../core/services/abstracts/ILoginService';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login implements OnInit, OnDestroy {

  public form: FormGroup;

  constructor(
    @Inject(loginServiceToken) private readonly _loginService: ILoginService, 
    private readonly _formBuilder: FormBuilder,
    @Inject(PLATFORM_ID) private platformId: Object,
    private readonly _route: Router){
    this.form = _formBuilder.group({
      email: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required])]
    });
  }

  private _bodyElement: HTMLBodyElement | undefined;

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

  onSubmit(){
    if(this.form.valid){
      this._loginService.signIn(this.form.value).subscribe(
        {
          next: (value) => {
            this._route.navigate(['panel'])
          }
        }
      );
    }
  }

}
