import { Injectable } from '@angular/core';
import { ILoginService } from '../../abstracts/ILoginService';
import { Observable } from 'rxjs';
import { ResponseModel } from '../../../../shared/models/responseModel';
import { SignInResponseDto } from '../../../../shared/models/user/loginModel';

@Injectable()
export class LoginService implements ILoginService {

  constructor() { }
  
  signIn(request: any): Observable<ResponseModel<SignInResponseDto>> {
    throw new Error('Method not implemented.');
  }
}
