import { createAction } from "@ngrx/store";

export enum AppActionTypes {
  Login = '[Auth] Login',
}

export const login = createAction(
  AppActionTypes.Login
);
