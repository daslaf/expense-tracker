import { Component, ContentChild } from '@angular/core';
import { UiInputDirective } from './ui-input.directive';

@Component({
  selector: 'ui-input-container',
  styleUrls: ['ui-input.sass'],
  host: {
    '[class.ui-focus]': '_uiInput.focused',
    '[class.ui-empty]': '_uiInput.empty'
  },
  template: `
    <ng-content select="input, textarea"></ng-content>
    <div class="ui-input-icon__wrapper">
      <ng-content select="ui-input-icon"></ng-content>
    </div>
  `
})
export class UiInputContainerComponent {
  @ContentChild(UiInputDirective) _uiInput: UiInputDirective;
}