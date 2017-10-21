import { Component } from '@angular/core';

@Component({
  selector: 'ui-card',
  styleUrls: ['./ui-card.component.sass'],
  host: { 'class': 'ui-card' },
  template: `<ng-content></ng-content>`
})
export class UiCardComponent {}
