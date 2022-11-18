import { AppState } from "../states";
import { createSelector } from "@ngrx/store";

export const selectVisualReasoning = (state: AppState) => state.visualReasoning;

export const selectVisualReasoningLoading = createSelector(
  selectVisualReasoning,
  visualReasoning => visualReasoning.loading
)

export const selectVisualReasoningSubTest = createSelector(
  selectVisualReasoning,
  visualReasoning => visualReasoning.subtest
)
