import { BarrettTest } from "../entities/barrett/barrett-test.model";

export interface AppState {
  barrettTest: {
    tests: BarrettTest[];
    selectedTest: number;
  }
}
