import { BarrettTest } from "../entities/barrett/barrett-test.model";

export interface AppState {
  barrettTests: BarrettTest[];
  selectedBarrettTestId: Number;
}
