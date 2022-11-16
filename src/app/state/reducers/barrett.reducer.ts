import { createReducer, on } from "@ngrx/store";
import { BarrettState } from "../states/barrett.state";
import {
  createBarrettTestSuccess,
  deleteSelectedBarrettTestSuccess,
  setBarrettTests,
  setSelectedBarrettTestIndex
} from "../actions/barrett.action";

const initialState: BarrettState = {
  tests: [],
  selectedTest: 0
}

export const barrettReducers = createReducer(
  initialState,
  on(setBarrettTests, (state, {tests}) => ({...state, tests: tests})),
  on(setSelectedBarrettTestIndex, (state, {index}) => ({...state, selectedTest: index})),
  on(createBarrettTestSuccess, (state, {test}) => ({...state, tests: state.tests.concat(test)})),
  on(deleteSelectedBarrettTestSuccess, (state, {id}) => ({...state, tests: state.tests.filter(test => test.id != id)}))
)
