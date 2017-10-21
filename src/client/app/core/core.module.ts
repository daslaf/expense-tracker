import { NgModule } from '@angular/core';

import { ExpenseService } from './services/expense.service';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth.guard';

@NgModule({
  imports: [],
  declarations: [],
  providers: [
    AuthGuard,
    AuthService,
    ExpenseService
  ]
})
export class CoreModule {}