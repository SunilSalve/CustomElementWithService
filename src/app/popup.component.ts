import { Component, Injector, EventEmitter, Input, Output } from '@angular/core';
import { PopupService } from './popup.service';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'my-popup',
  template: `
    <span>Popup: {{message}}</span>
    <button (click)="closed.next()">&#x2716;</button>
  `,
  host: {
    '[@state]': 'state',
  },
  animations: [
    trigger('state', [
      state('opened', style({transform: 'translateY(0%)'})),
      state('void, closed', style({transform: 'translateY(100%)', opacity: 0})),
      transition('* => *', animate('100ms ease-in')),
    ])
  ],
  styles: [`
    :host {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      background: #009cff;
      height: 48px;
      padding: 16px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-top: 1px solid black;
      font-size: 24px;
    }

    button {
      border-radius: 50%;
    }
  `]
})
export class PopupComponent {
  private state: 'opened' | 'closed' = 'closed';
  public message :String;
  constructor(injector: Injector, public popup: PopupService) {
  }
  ngOnInit(){
    this.message = this.popup.getMessageString()
    this.state = 'opened';
  }
  @Output()
  closed = new EventEmitter();
}
