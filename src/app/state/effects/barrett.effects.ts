import { Injectable } from "@angular/core";
import { Actions, concatLatestFrom, createEffect, ofType } from "@ngrx/effects";
import { BarrettTestService } from "../../services/barrett/barrett-test.service";
import {
  AppActionTypes,
  createBarrettTest,
  createBarrettTestSuccess, deleteSelectedBarrettTest, deleteSelectedBarrettTestSuccess,
  setBarrettTests,
  setSelectedBarrettTestIndex
} from "../app.action";
import { concatMap, map, mergeMap, of, switchMap } from "rxjs";
import { BarrettTest } from "../../entities/barrett/barrett-test.model";
import { Store } from "@ngrx/store";
import { AppState } from "../app.state";
import { selectBarrettTests, selectSelectedBarrettTest } from "../app.selector";

@Injectable()
export class BarrettEffect {

  constructor(private actions$: Actions, private barrettService: BarrettTestService, private store: Store<AppState>) { }

  loadBarrettTest$ = createEffect(() => this.actions$.pipe(
    ofType(AppActionTypes.LoginSuccess, AppActionTypes.LoadBarrettTests),
    mergeMap(() => this.barrettService.getAll().pipe(
      map(res => setBarrettTests({tests: res.body as BarrettTest[]}))
    ))
  ));

  setSelectedBarrettTestIndex$ = createEffect( () => this.actions$.pipe(
    ofType(AppActionTypes.SetBarrettTests),
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
    switchMap( ([action, tests]) => of(
      setSelectedBarrettTestIndex({index: tests.length}))
    )
  ));

  deleteSelectedBarrettTest$ = createEffect(() => this.actions$.pipe(
    ofType(deleteSelectedBarrettTest),
    concatLatestFrom(() => [
      this.store.select(selectBarrettTests),
      this.store.select(selectSelectedBarrettTest)
    ]),
    concatMap(([action, tests, index]) => this.barrettService.delete(tests[index - 1].id).pipe(
      map(() => deleteSelectedBarrettTestSuccess({id: tests[index - 1].id}))
    ))
  ));

  deleteSelectedBarrettTestSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(deleteSelectedBarrettTestSuccess),
    concatLatestFrom(() => this.store.select(selectBarrettTests)),
    switchMap(([action, tests]) => of(
      setSelectedBarrettTestIndex({index: tests.length})
    ))
  ))
}
