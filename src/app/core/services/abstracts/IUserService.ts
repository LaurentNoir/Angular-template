import { InjectionToken } from "@angular/core";
import { Observable } from "rxjs";
import { ResponseModel } from "../../../shared/models/responseModel";
import { SidebarModel } from "../../../shared/models/user/sidebarModel";

export interface IUserService {
    getSidebar(): Observable<ResponseModel<SidebarModel>>
}

export const userServiceToken = new InjectionToken<IUserService>('root');