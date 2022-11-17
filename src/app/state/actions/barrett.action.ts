import { createAction, props } from "@ngrx/store";
import { BarrettTest } from "../../entities/barrett/barrett-test.model";

export enum BarrettActionTypes {
  LoadBarrettTests = '[BarrettTest] LoadBarrettTests',
  SetBarrettTests = '[BarrettTest] SetBarrettTests',
  SetSelectedBarrettTestIndex = '[BarrettTest] SetSelectedBarrettTestIndex',
  CreateBarrettTest = '[BarrettTest] CreateBarrettTest',
  CreateBarrettTestSuccess = '[BarrettTest] CreateBarrettTestSuccess',
  DeleteSelectedBarrettTest = '[BarrettTest] DeleteSelectedBarrettTest',
  DeleteSelectedBarrettTestSuccess = '[BarrettTest] DeleteSelectedBarrettTestSuccess',
  SetVisualReasoningCreatedDate = '[BarrettTest] SetVisualReasoningCreatedDate',
  SetVisualReasoningCompletedDate = '[BarrettTest] SetVisualReasoningCompletedDate'
}

export const loadBarrettTests = createAction(
  BarrettActionTypes.LoadBarrettTests
);

export const setBarrettTests = createAction(
  BarrettActionTypes.SetBarrettTests,
  props<{ tests: BarrettTest[] }>()
);

export const setSelectedBarrettTestIndex = createAction(
  BarrettActionTypes.SetSelectedBarrettTestIndex,
  props<{ index: number }>()
);

export const createBarrettTest = createAction(
  BarrettActionTypes.CreateBarrettTest
);

export const createBarrettTestSuccess = createAction(
  BarrettActionTypes.CreateBarrettTestSuccess,
  props<{ test: BarrettTest }>()
);

export const deleteSelectedBarrettTest = createAction(
  BarrettActionTypes.DeleteSelectedBarrettTest
);

export const deleteSelectedBarrettTestSuccess = createAction(
  BarrettActionTypes.DeleteSelectedBarrettTestSuccess,
  props<{ id: number }>()
);

export const setVisualReasoningCreatedDate = createAction(
  BarrettActionTypes.SetVisualReasoningCreatedDate,
  props<{testId: number, createdDate: Date}>()
);

export const setVisualReasoningCompletedDate = createAction(
  BarrettActionTypes.SetVisualReasoningCompletedDate,
  props<{testId: number, completedDate: Date}>()
)

