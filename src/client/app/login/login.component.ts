import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";
import { Store } from '@ngrx/store';
import { LOGIN, LOGOUT } from './state/login.reducer';
import 'rxjs/add/operator/distinctUntilChanged';


import { LoginCredentials } from '../core/models/login-credentials';
import { LoginResponse } from '../core/models/login-response';
import { AuthService } from "../core/services/auth.service";
import { Observable } from "rxjs/Observable";

@Component({
  selector: "app-login",
  styleUrls: ["./login.component.sass"],
  template: `
    <div class="container">
      <ui-card>
        <h1>Iniciar sesión</h1>
        <form [formGroup]="loginForm" (submit)="onFormSubmit()" novalidate>
          <!-- email -->
          <ui-input-container>
            <input uiInput 
              type="email" name="email" placeholder="E-mail"
              formControlName="email"
              email required>
            <ui-input-icon><i class="material-icons">mail_outline</i></ui-input-icon>
          </ui-input-container>
          
          <!-- password -->
          <ui-input-container>
            <input uiInput 
              type="password" name="password" placeholder="Password"
              formControlName="password"
              required>
            <ui-input-icon><i class="material-icons">account_box</i></ui-input-icon>
          </ui-input-container>
          <button type="submit">Submit the shit!</button>
        </form>
      </ui-card>
    </div>
    <h3><pre>{{ data | json }}</pre></h3>
  `
})
export class LoginComponent {
  title = "Wena cabros";

  isLogged$: Observable<boolean>;

  loginForm: FormGroup = this.fb.group({
    email: this.fb.control(null),
    password: this.fb.control(null)
  });

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router,
    private store: Store<{login: boolean}>
  ) { 
    this.isLogged$ = this.store.select('login');
  }

  onFormSubmit() {
    const { email, password } = this.loginForm.value;
    const credentials = new LoginCredentials(email, password);

    // this.auth.login(credentials).subscribe(( data: LoginResponse ) => {
    //   console.log(data.didMatch);

    //   if ( data.didMatch ) {
    //     this.router.navigate([ '/expenses' ]);
    //   }
    // });
    this.login();
  }

  login() {
    const value = this.store.dispatch({ type: LOGIN });
    console.log('onLoginDispatch', value);
  }
}
