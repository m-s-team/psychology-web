import { ActionReducerMap, createReducer, on } from "@ngrx/store";
import { AppState } from "./app.state";
import { createBarrettTestSuccess, loginSuccess, setBarrettTests, setSelectedBarrettTestIndex } from "./app.action";

const initialState: AppState = {
  auth: {
    isLoggedIn: false
  },
  barrettTest: {
    tests: [],
    selectedTest: 0
  }
}

export const reducers:ActionReducerMap<AppState> = {
  auth: createReducer(
    initialState.auth,
    on(loginSuccess, (state) => ({...state, isLoggedIn: true})),
  ),
  barrettTest: createReducer(
    initialState.barrettTest,
    on(setBarrettTests, (state, {tests}) => ({...state, tests: tests})),
    on(setSelectedBarrettTestIndex, (state, {index}) => ({...state, selectedTest: index})),
    on(createBarrettTestSuccess, (state, {test}) => ({...state, tests: state.tests.concat(test)}))
  )
}
