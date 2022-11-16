import { AuthState } from "./auth.state";
import { BarrettState } from "./barrett.state";
import { VisualReasoningState } from "./visual-reasoning.state";

export interface AppState {
  auth: AuthState
  barrettTest: BarrettState
  visualReasoning: VisualReasoningState
}
