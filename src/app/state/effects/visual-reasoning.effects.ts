import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { VisualReasoningService } from "../../services/barrett/visual-reasoning.service";
import { Store } from "@ngrx/store";
import { AppState } from "../states";
import {
  changeVisualReasoningLoading,
  createVisualReasoningTest,
  createVisualReasoningTestSuccess,
  getVisualReasoningTest,
  getVisualReasoningTestSuccess,
  setVisualReasoningTest
} from "../actions/visual-reasoning.action";
import { concatMap, map, of, switchMap, tap } from "rxjs";
import { VisualReasoning } from "../../entities/barrett/visual-reasoning.model";
import { setVisualReasoningCompletedDate, setVisualReasoningCreatedDate } from "../actions/barrett.action";

@Injectable()
export class VisualReasoningEffect {

  constructor(private actions$: Actions, private visualReasoningService: VisualReasoningService, private store: Store<AppState>) {
  }

  getVisualReasoningTest$ = createEffect(() => this.actions$.pipe(
    ofType(getVisualReasoningTest),
    tap(() => this.store.dispatch(changeVisualReasoningLoading({loading: true}))),
    concatMap(({barrettTestId}) =>
      this.visualReasoningService.getByTestId(barrettTestId).pipe(
        map(res => getVisualReasoningTestSuccess({subtest: res.body as VisualReasoning}))
      )
    )
  ));

  getVisualReasoningTestSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(getVisualReasoningTestSuccess),
    switchMap(({subtest}) => of(
      setVisualReasoningTest({subtest}),
      changeVisualReasoningLoading({loading: false})
    ))
  ));

  createVisualReasoningTest$ = createEffect(() => this.actions$.pipe(
    ofType(createVisualReasoningTest),
    tap(() => this.store.dispatch(changeVisualReasoningLoading({loading: true}))),
    concatMap(({barrettTestId}) =>
      this.visualReasoningService.createByTestId(barrettTestId).pipe(
        map(res => createVisualReasoningTestSuccess({
          barretTestId: barrettTestId, subtest: res.body as VisualReasoning
        }))
      )
    )
  ));

  createVisualReasoningTestSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(createVisualReasoningTestSuccess),
    switchMap(({barretTestId, subtest}) => of(
      setVisualReasoningTest({subtest}),
      setVisualReasoningCreatedDate({testId: barretTestId, createdDate: subtest.createdDate}),
      setVisualReasoningCompletedDate({testId: barretTestId, completedDate: subtest.completedDate}),
      changeVisualReasoningLoading({loading: false})
    ))
  ));

}
