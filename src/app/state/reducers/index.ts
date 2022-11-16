import { ActionReducerMap } from "@ngrx/store";
import { AppState } from "../states";
import { authReducers } from "./auth.reducer";
import { barrettReducers } from "./barrett.reducer";
import { visualReasoningReducer } from "./visual-reasoning.reducer";

export const reducers:ActionReducerMap<AppState> = {
  auth: authReducers,
  barrettTest: barrettReducers,
  visualReasoning: visualReasoningReducer
}
