import { VisualReasoningState } from "../states/visual-reasoning.state";
import { createReducer, on } from "@ngrx/store";
import { changeVisualReasoningLoading, setVisualReasoningTest } from "../actions/visual-reasoning.action";

const initialState: VisualReasoningState = {
  loading: false,
  subtest: null
}

export const visualReasoningReducer = createReducer(
  initialState,
  on(changeVisualReasoningLoading, (state, {loading}) => ({...state, loading})),
  on(setVisualReasoningTest, (state, {subtest}) => ({...state, subtest})),
)
