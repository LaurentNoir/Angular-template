import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  public isOpen: boolean = false;
  public messajeIsOpen: boolean = false;
  public alertIsOpen: boolean = false;

  @ViewChild('userMenu')
  public userMenuButton: ElementRef | undefined;

  @ViewChild('mensajeMenu')
  public mensajeMenuButton: ElementRef | undefined;

  @ViewChild('alertMenu')
  public alertMenuButton: ElementRef | undefined;

  public openCloseUserMenu() {
    this.isOpen = !this.isOpen;
  }

  public openCloseMessageMenu() {
    this.messajeIsOpen = !this.messajeIsOpen;
  }

  public openCloseAlertMenu(){
    this.alertIsOpen = !this.alertIsOpen;
  }

  @HostListener('document:click', ['$event'])
  onClickFuera(event: MouseEvent) {
    if (this.userMenuButton && !this.userMenuButton.nativeElement.contains(event.target)) {
      this.isOpen = false;
    }

    if (this.mensajeMenuButton && !this.mensajeMenuButton.nativeElement.contains(event.target)) {
      this.messajeIsOpen = false;
    }

    if (this.alertMenuButton && !this.alertMenuButton.nativeElement.contains(event.target)) {
      this.alertIsOpen = false;
    }

  }
}
