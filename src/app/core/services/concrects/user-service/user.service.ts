import { Injectable } from '@angular/core';
import { IUserService } from '../../abstracts/IUserService';
import { ResponseModel } from '../../../../shared/models/responseModel';
import { SidebarModel } from '../../../../shared/models/user/sidebarModel';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService implements IUserService {

  constructor() { }

  getSidebar(): Observable<ResponseModel<SidebarModel>>{
    throw new Error('Method not implemented.');
  }
  




}
