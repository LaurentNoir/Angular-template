import { CommonModule } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { NavItemModel, SidebarModel } from '../../shared/models/user/sidebarModel';
import { IUserService, userServiceToken } from '../services/abstracts/IUserService';
import { ResponseModel } from '../../shared/models/responseModel';

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css'
})

export class Sidebar implements OnInit{
  public isOpen: boolean = true;

  public menu: SidebarModel = [];

  constructor(
    @Inject(userServiceToken) 
    private readonly _userService: IUserService){

  }

  ngOnInit(){
    this._userService.getSidebar().subscribe(
      {
        next: (value: ResponseModel<SidebarModel>) => {
          this.menu = value.result;
        }
      }
    );
  }

  public openCloseSidebar() {
    this.isOpen = !this.isOpen;
  }

  public openCloseComponents(component: any) {
    if (!component.isPage) {
      console.log(component.isCollapse)
      component.isCollapse = !component.isCollapse;
      console.log(component.isCollapse)
    }
  }
}
