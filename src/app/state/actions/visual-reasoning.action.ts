import { createAction, props } from "@ngrx/store";
import { VisualReasoning } from "../../entities/barrett/visual-reasoning.model";

export enum VisualReasoningActionTypes {
  LoadVisualReasoningTest = '[VisualReasoning] LoadVisualReasoningTest',
  LoadVisualReasoningTestSuccess = '[VisualReasoning] LoadVisualReasoningTestSuccess',
}

export const loadVisualReasoningTest = createAction(
  VisualReasoningActionTypes.LoadVisualReasoningTest,
  props<{ testId: string }>()
);

export const loadVisualReasoningTestSuccess = createAction(
  VisualReasoningActionTypes.LoadVisualReasoningTestSuccess,
  props<{ barretTestId: number, subtest: VisualReasoning }>()
);
