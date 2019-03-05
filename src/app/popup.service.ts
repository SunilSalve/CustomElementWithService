
import { ApplicationRef, ComponentFactoryResolver, Injectable, Injector } from '@angular/core';
import { NgElement, WithProperties } from '@angular/elements';
import { PopupComponent } from './popup.component';


@Injectable()
export class PopupService {
  constructor(public injector: Injector,) {}

  getMessageString(){
    return "Orxe 3.s0"
  }
}
