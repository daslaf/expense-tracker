import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { JwtModule } from '@auth0/angular-jwt'; 

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

// Modules
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { LoginModule } from './login/login.module';

// Components
import { AppComponent } from './app.component';
import { ExpensesComponent } from './expenses/expenses.component';

// Guards
import { AuthGuard } from './core/guards/auth.guard';

// Reducers
import { loginReducer } from './login/state/login.reducer';

const reducers = {
  login: loginReducer
}

const routes: Routes = [
  {
    path: 'expenses',
    component: ExpensesComponent,
    canActivate: [ AuthGuard ]
  }
]


@NgModule({
  declarations: [
    AppComponent,
    ExpensesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({ maxAge: 25 }),

    // Own
    CoreModule,
    SharedModule,
    LoginModule
  ],
  // providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
