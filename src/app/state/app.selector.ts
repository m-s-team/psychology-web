import { AppState } from "./app.state";
import { createSelector } from "@ngrx/store";

export const selectAppState = (state: { app: AppState; }) => state.app;

export const selectBarrettTest = createSelector(
  selectAppState,
  appState => appState.barrettTest
)

export const selectBarrettTests = createSelector(
  selectBarrettTest,
  barretTest => barretTest.tests
)

export const selectSelectedBarrettTest = createSelector(
  selectBarrettTest,
  barretTest => barretTest.selectedTest
)
