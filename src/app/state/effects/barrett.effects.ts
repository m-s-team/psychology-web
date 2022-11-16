import { Injectable } from "@angular/core";
import { Actions, concatLatestFrom, createEffect, ofType } from "@ngrx/effects";
import { BarrettTestService } from "../../services/barrett/barrett-test.service";
import { loginSuccess } from "../actions/auth.action";
import { concatMap, map, mergeMap, of, switchMap } from "rxjs";
import { BarrettTest } from "../../entities/barrett/barrett-test.model";
import { Store } from "@ngrx/store";
import { AppState } from "../states";
import { selectBarrettTests, selectSelectedBarrettTest } from "../selectors/barrett.selector";
import {
  createBarrettTest,
  createBarrettTestSuccess,
  deleteSelectedBarrettTest,
  deleteSelectedBarrettTestSuccess,
  loadBarrettTests,
  setBarrettTests,
  setSelectedBarrettTestIndex
} from "../actions/barrett.action";

@Injectable()
export class BarrettEffect {

  constructor(private actions$: Actions, private barrettService: BarrettTestService, private store: Store<AppState>) { }

  loadBarrettTest$ = createEffect(() => this.actions$.pipe(
    ofType(loginSuccess, loadBarrettTests),
    mergeMap(() => this.barrettService.getAll().pipe(
      map(res => setBarrettTests({tests: res.body as BarrettTest[]}))
    ))
  ));

  setSelectedBarrettTestIndex$ = createEffect( () => this.actions$.pipe(
    ofType(setBarrettTests),
    map(({tests}) => tests),
    switchMap((tests: BarrettTest[]) => of(
      setSelectedBarrettTestIndex({index: tests.length}))
    )
  ));

  createBarrettTest$ = createEffect(() => this.actions$.pipe(
    ofType(createBarrettTest),
    concatMap(() => this.barrettService.create().pipe(
      map(res => createBarrettTestSuccess({test: res.body as BarrettTest}))
    ))
  ));

  createBarrettTestSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(createBarrettTestSuccess),
    concatLatestFrom(() => this.store.select(selectBarrettTests)),
    switchMap( ([, tests]) => of(
      setSelectedBarrettTestIndex({index: tests.length}))
    )
  ));

  deleteSelectedBarrettTest$ = createEffect(() => this.actions$.pipe(
    ofType(deleteSelectedBarrettTest),
    concatLatestFrom(() => [
      this.store.select(selectBarrettTests),
      this.store.select(selectSelectedBarrettTest)
    ]),
    concatMap(([, tests, index]) => this.barrettService.deleteById(tests[index - 1].id).pipe(
      map(() => deleteSelectedBarrettTestSuccess({id: tests[index - 1].id}))
    ))
  ));

  deleteSelectedBarrettTestSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(deleteSelectedBarrettTestSuccess),
    concatLatestFrom(() => this.store.select(selectBarrettTests)),
    switchMap(([, tests]) => of(
      setSelectedBarrettTestIndex({index: tests.length})
    ))
  ))
}
