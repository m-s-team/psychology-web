import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { BarrettTestService } from "../../services/barrett/barrett-test.service";
import { AppActionTypes, setBarrettTests, setSelectedBarrettTestIndex } from "../app.action";
import { map, mergeMap, Observable, of, switchMap, tap } from "rxjs";
import { BarrettTest } from "../../entities/barrett/barrett-test.model";

@Injectable()
export class BarrettEffect {

  constructor(private actions$: Actions, private barrettService: BarrettTestService) { }

  loadBarrettTest$ = createEffect(() => this.actions$.pipe(
    ofType(AppActionTypes.LoginSuccess, AppActionTypes.LoadBarrettTests),
    mergeMap(() => this.barrettService.getAll().pipe(
      map(tests => setBarrettTests({tests: tests.body as BarrettTest[]}))
    ))
  ));

  setSelectedBarrettTestIndex$ = createEffect( () => this.actions$.pipe(
    ofType(AppActionTypes.SetBarrettTests),
    map(({tests}) => tests),
    switchMap((tests: BarrettTest[]) => of(
      setSelectedBarrettTestIndex({index: tests.length}))
    )
  ))

}
