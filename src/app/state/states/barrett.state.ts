import { BarrettTest } from "../../entities/barrett/barrett-test.model";

export interface BarrettState {
  tests: BarrettTest[];
  selectedTest: number;
}
