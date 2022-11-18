import { VisualReasoning } from "../../entities/barrett/visual-reasoning.model";

export interface VisualReasoningState {
  loading: boolean;
  subtest: VisualReasoning | null;
}
