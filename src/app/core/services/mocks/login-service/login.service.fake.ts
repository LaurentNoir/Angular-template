import { Injectable } from '@angular/core';
import { ILoginService } from '../../abstracts/ILoginService';
import { Observable, of } from 'rxjs';
import { ResponseModel } from '../../../../shared/models/responseModel';
import { SignInResponseDto } from '../../../../shared/models/user/loginModel';

@Injectable()
export class LoginServiceFake implements ILoginService {

  constructor() { }
  signIn(request: any): Observable<ResponseModel<SignInResponseDto>> {
    let response:ResponseModel<SignInResponseDto> = {
      message: '',
      status: true,
      result: {
        email: 'test@test.com',
        fullname: 'Laurent'
      }
    }
    
    return of(response);
  }
}
