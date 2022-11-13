import { createAction } from "@ngrx/store";

export enum AppActionTypes {
  Login = '[Auth] Login',
  LoginComplete = '[Auth] LoginComplete',
  LoginSuccess = '[Auth] LoginSuccess',
  LoginFailure = '[Auth] LoginFailure',
}

export const login = createAction(
  AppActionTypes.Login
);

export const loginComplete = createAction(
  AppActionTypes.LoginComplete
);

export const loginSuccess = createAction(
  AppActionTypes.LoginSuccess
);

export const loginFailure = createAction(
  AppActionTypes.LoginFailure
);
