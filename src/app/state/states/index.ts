import { AuthState } from "./auth.state";
import { BarrettState } from "./barrett.state";

export interface AppState {
  auth: AuthState
  barrettTest: BarrettState
}
