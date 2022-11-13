import { ActionReducerMap, createReducer, on } from "@ngrx/store";
import { AppState } from "./app.state";
import { loginSuccess } from "./app.action";

const initialState: AppState = {
  auth: {
    isLoggedIn: false
  },
  barrettTest: {
    tests: [],
    selectedTest: -1
  }
}

export const reducers:ActionReducerMap<AppState> = {
  auth: createReducer(
    initialState.auth,
    on(loginSuccess, (state) => ({...state, isLoggedIn: true})),
  ),
  barrettTest: createReducer(
    initialState.barrettTest
  )
}
