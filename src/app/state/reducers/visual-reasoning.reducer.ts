import { VisualReasoningState } from "../states/visual-reasoning.state";
import { createReducer, on } from "@ngrx/store";
import { loadVisualReasoningTestSuccess } from "../actions/visual-reasoning.action";

const initialState: VisualReasoningState = {
  test: {}
}

export const visualReasoningReducer = createReducer(
  initialState,
  on(loadVisualReasoningTestSuccess, (state, {test}) => ({...state, test: test})),
)
