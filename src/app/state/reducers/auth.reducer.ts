import { AuthState } from "../states/auth.state";
import { ActionReducerMap, createReducer, on } from "@ngrx/store";
import { loginSuccess } from "../actions/auth.action";

const initialState: AuthState = {
  isLoggedIn: false
}

export const authReducers = createReducer(
  initialState,
  on(loginSuccess, (state) => ({...state, isLoggedIn: true})),
)
