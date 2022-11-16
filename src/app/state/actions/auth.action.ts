import { createAction } from "@ngrx/store";

export enum AuthActionTypes {
  Login = '[Auth] Login',
  LoginComplete = '[Auth] LoginComplete',
  LoginSuccess = '[Auth] LoginSuccess',
  LoginFailure = '[Auth] LoginFailure',
  CheckLogin = '[Auth] CheckLogin'
}

export const login = createAction(
  AuthActionTypes.Login
);

export const loginComplete = createAction(
  AuthActionTypes.LoginComplete
);

export const loginSuccess = createAction(
  AuthActionTypes.LoginSuccess
);

export const loginFailure = createAction(
  AuthActionTypes.LoginFailure
);

export const checkLogin = createAction(
  AuthActionTypes.CheckLogin
);

