import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';

import { UiCardComponent } from './ui-card.component';

const UiCardFeatures = [
  UiCardComponent
];

@NgModule({
  imports: [
    // CommonModule
  ],
  declarations: UiCardFeatures,
  exports: UiCardFeatures
})
export class UiCardModule { }
