import { createReducer } from "@ngrx/store";
import { AppState } from "./app.state";

const initialState: AppState = {
  barrettTests: [],
  selectedBarrettTestId: 0
}

export const reducer = createReducer(
  initialState,
)
