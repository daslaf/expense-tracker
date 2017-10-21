import { Action } from '@ngrx/store';

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export function loginReducer(state: boolean = false, action: Action) {
  switch( action.type ) {
    case LOGIN:
      console.log('logging in bish');
      return true;
    case LOGOUT:
      console.log('logging out bish');
      return false;
  }
}