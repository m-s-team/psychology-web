import { createAction, props } from "@ngrx/store";
import { VisualReasoning } from "../../entities/barrett/visual-reasoning.model";

export enum VisualReasoningActionTypes {
  ChangeVisualReasoningLoading = '[VisualReasoning] ChangeVisualReasoningLoading',
  SetVisualReasoningTest = '[VisualReasoning] SetVisualReasoningTest',
  CreateVisualReasoningTest = '[VisualReasoning] CreateVisualReasoningTest',
  CreateVisualReasoningTestSuccess = '[VisualReasoning] CreateVisualReasoningTestSuccess',
  GetVisualReasoningTest = '[VisualReasoning] GetVisualReasoningTest',
  GetVisualReasoningTestSuccess = '[VisualReasoning] GetVisualReasoningTestSuccess',
}

export const changeVisualReasoningLoading = createAction(
  VisualReasoningActionTypes.ChangeVisualReasoningLoading,
  props<{ loading: boolean }>()
);

export const setVisualReasoningTest = createAction(
  VisualReasoningActionTypes.SetVisualReasoningTest,
  props<{ subtest: VisualReasoning }>()
);

export const createVisualReasoningTest = createAction(
  VisualReasoningActionTypes.CreateVisualReasoningTest,
  props<{ barrettTestId: number }>()
);

export const createVisualReasoningTestSuccess = createAction(
  VisualReasoningActionTypes.CreateVisualReasoningTestSuccess,
  props<{ barretTestId: number, subtest: VisualReasoning }>()
);

export const getVisualReasoningTest = createAction(
  VisualReasoningActionTypes.GetVisualReasoningTest,
  props<{ barrettTestId: number }>()
);

export const getVisualReasoningTestSuccess = createAction(
  VisualReasoningActionTypes.GetVisualReasoningTestSuccess,
  props<{ subtest: VisualReasoning }>()
);
