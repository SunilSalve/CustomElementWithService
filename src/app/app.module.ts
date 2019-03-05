import { NgModule } from '@angular/core';
import { Component, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { PopupComponent } from './popup.component';
import { PopupService } from './popup.service';

// Include the `PopupService` provider,
// but exclude `PopupComponent` from compilation,
// because it will be added dynamically.

@NgModule({
  imports: [BrowserModule, BrowserAnimationsModule],
  providers: [PopupService],
  declarations: [AppComponent, PopupComponent],
  entryComponents: [PopupComponent],
})
export class AppModule {
  constructor(injector: Injector, public popup: PopupService) {}

    ngDoBootstrap(){
      // Convert `PopupComponent` to a custom element.
    const PopupElement = createCustomElement(PopupComponent, {injector : this.popup.injector});
    // Register the custom element with the browser.
    customElements.define('popup-element', PopupElement);
    

    }

}
