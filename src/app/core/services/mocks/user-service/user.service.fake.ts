import { Injectable } from '@angular/core';
import { IUserService } from '../../abstracts/IUserService';
import { SidebarModel } from '../../../../shared/models/user/sidebarModel';
import { Observable, of } from 'rxjs';
import { ResponseModel } from '../../../../shared/models/responseModel';
import { sidebarResponse } from '../data/user'

@Injectable({
  providedIn: 'root'
})

export class UserServiceFake implements IUserService {

  constructor() { }

  getSidebar(): Observable<ResponseModel<SidebarModel>> {
    return of(sidebarResponse);
  }
}
