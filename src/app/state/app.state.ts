import { BarrettTest } from "../entities/barrett/barrett-test.model";

export interface AppState {
  auth: {
    isLoggedIn: Boolean;
  }
  barrettTest: {
    tests: BarrettTest[];
    selectedTest: number;
  }
}
