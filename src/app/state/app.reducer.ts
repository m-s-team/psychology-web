import { createReducer } from "@ngrx/store";
import { AppState } from "./app.state";

const initialState: AppState = {
  barrettTest: {
    tests: [],
    selectedTest: -1
  }
}

export const reducer = createReducer(
  initialState,
)
