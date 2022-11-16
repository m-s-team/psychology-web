import { ActionReducerMap } from "@ngrx/store";
import { AppState } from "../states";
import { authReducers } from "./auth.reducer";
import { barrettReducers } from "./barrett.reducer";

export const reducers:ActionReducerMap<AppState> = {
  auth: authReducers,
  barrettTest: barrettReducers
}
