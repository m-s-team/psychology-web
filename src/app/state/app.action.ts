import { createAction, props } from "@ngrx/store";
import { BarrettTest } from "../entities/barrett/barrett-test.model";

export enum AppActionTypes {
  Login = '[Auth] Login',
  LoginComplete = '[Auth] LoginComplete',
  LoginSuccess = '[Auth] LoginSuccess',
  LoginFailure = '[Auth] LoginFailure',
  CheckLogin = '[Auth] CheckLogin',
  LoadBarrettTests = '[BarrettTest] LoadBarrettTests',
  SetBarrettTests = '[BarrettTest] SetBarrettTests',
  SetSelectedBarrettTestIndex = '[BarrettTest] SetSelectedBarrettTestIndex',
  CreateBarrettTest = '[BarrettTest] CreateBarrettTest',
  CreateBarrettTestSuccess = '[BarrettTest] CreateBarrettTestSuccess'
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

export const checkLogin = createAction(
  AppActionTypes.CheckLogin
);

export const loadBarrettTests = createAction(
  AppActionTypes.LoadBarrettTests
);

export const setBarrettTests = createAction(
  AppActionTypes.SetBarrettTests,
  props<{tests: BarrettTest[]}>()
);

export const setSelectedBarrettTestIndex = createAction(
  AppActionTypes.SetSelectedBarrettTestIndex,
  props<{index: number}>()
);

export const createBarrettTest = createAction(
  AppActionTypes.CreateBarrettTest
)

export const createBarrettTestSuccess = createAction(
  AppActionTypes.CreateBarrettTestSuccess,
  props<{test: BarrettTest}>()
)
