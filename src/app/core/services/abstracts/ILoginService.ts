import { InjectionToken } from "@angular/core";
import { Observable } from "rxjs";
import { ResponseModel } from "../../../shared/models/responseModel";
import { SignInResponseDto } from "../../../shared/models/user/loginModel";

export interface ILoginService {
    signIn(request: any): Observable<ResponseModel<SignInResponseDto>>
}

export const loginServiceToken = new InjectionToken<ILoginService>('root');