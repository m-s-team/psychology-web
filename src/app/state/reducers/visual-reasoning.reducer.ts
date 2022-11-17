import { VisualReasoningState } from "../states/visual-reasoning.state";
import { createReducer, on } from "@ngrx/store";
import { loadVisualReasoningTestSuccess } from "../actions/visual-reasoning.action";

const initialState: VisualReasoningState = {
  subtest: null
}

export const visualReasoningReducer = createReducer(
  initialState,
  on(loadVisualReasoningTestSuccess, (state, {barretTestId, subtest}) => ({...state, subtest: subtest})),
)
