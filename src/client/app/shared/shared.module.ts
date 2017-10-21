import { NgModule } from '@angular/core';

import { UiCardModule } from './ui-card/ui-card.module';
import { UiFormsModule } from './ui-forms/ui-forms.module';

const UiModules = [
  UiCardModule,
  UiFormsModule
]

@NgModule({
  imports: UiModules,
  exports: UiModules
})
export class SharedModule { }

// Export other modules & stuff
export { Expense } from './models/expense';
