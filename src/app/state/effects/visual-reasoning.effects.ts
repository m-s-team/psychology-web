import { Injectable } from "@angular/core";
import { Actions, concatLatestFrom, createEffect, ofType } from "@ngrx/effects";
import { VisualReasoningService } from "../../services/barrett/visual-reasoning.service";
import { Store } from "@ngrx/store";
import { AppState } from "../states";
import { loadVisualReasoningTest, loadVisualReasoningTestSuccess } from "../actions/visual-reasoning.action";
import { selectBarrettTests } from "../selectors/barrett.selector";
import { concatMap, map } from "rxjs";
import { BarrettTest } from "../../entities/barrett/barrett-test.model";
import { VisualReasoning } from "../../entities/barrett/visual-reasoning.model";

@Injectable()
export class VisualReasoningEffect {

  constructor(private actions$: Actions, private visualReasoningService: VisualReasoningService, private store: Store<AppState>) {
  }


  loadVisualReasoningTest$ = createEffect(() => this.actions$.pipe(
    ofType(loadVisualReasoningTest),
    concatLatestFrom(() => [
      this.store.select(selectBarrettTests)
    ]),
    map(([{testId}, tests]) => tests.find(test => test.id.toString() == testId) as BarrettTest),
    concatMap(test => {
      if (test.visualReasoningSubtest.createdDate == null)
        return this.visualReasoningService.createByTestId(test.id.toString()).pipe(
          map(res => loadVisualReasoningTestSuccess({test: res.body as VisualReasoning}))
        )
      else
        return this.visualReasoningService.getByTestId(test.id.toString()).pipe(
          map(res => loadVisualReasoningTestSuccess({test: res.body as VisualReasoning}))
        )
    })
  ));


}
