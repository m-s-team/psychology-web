import { AppState } from "../states";
import { createSelector } from "@ngrx/store";

export const selectBarrettTest = (state: AppState) => state.barrettTest;

export const selectBarrettTests = createSelector(
  selectBarrettTest,
  barretTest => barretTest.tests
)

export const selectSelectedBarrettTest = createSelector(
  selectBarrettTest,
  barretTest => barretTest.selectedTest
)
