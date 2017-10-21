import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';

import { UiInputContainerComponent } from './ui-input/ui-input-container.component';
import { UiInputDirective } from './ui-input/ui-input.directive';
import { UiInputIconDirective } from './ui-input/ui-input-icon.directive';

const UiFormControls = [
  UiInputDirective,
  UiInputContainerComponent,
  UiInputIconDirective
]

@NgModule({
  imports: [
    // CommonModule
  ],
  declarations: UiFormControls,
  exports: UiFormControls
})
export class UiFormsModule { }
