import { createReducer, on } from "@ngrx/store";
import { BarrettState } from "../states/barrett.state";
import {
  createBarrettTestSuccess,
  deleteSelectedBarrettTestSuccess,
  setBarrettTests,
  setSelectedBarrettTestIndex, setVisualReasoningCompletedDate, setVisualReasoningCreatedDate
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
  on(deleteSelectedBarrettTestSuccess, (state, {id}) => ({...state, tests: state.tests.filter(test => test.id != id)})),
  on(setVisualReasoningCreatedDate, (state, {testId, createdDate}) => ({...state,
    tests: state.tests.map(test => test.id == testId ? {
      ...test,
      visualReasoningSubtest: {...test.visualReasoningSubtest, createdDate: createdDate}
    } : test)
  })),
  on(setVisualReasoningCompletedDate, (state, {testId, completedDate: completedDate}) => ({...state,
    tests: state.tests.map(test => test.id == testId ? {
      ...test,
      visualReasoningSubtest: {...test.visualReasoningSubtest, completedDate: completedDate}
    } : test)
  }))
)
