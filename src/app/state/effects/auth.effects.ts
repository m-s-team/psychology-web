import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { AppActionTypes, loginFailure, loginSuccess } from "../app.action";
import { catchError, exhaustMap, map, of, tap } from "rxjs";
import { AuthService } from "@auth0/auth0-angular";

@Injectable()
export class AuthEffect {

  constructor(private actions$: Actions, private authService: AuthService) { }

  login$ = createEffect(() => this.actions$.pipe(
    ofType(AppActionTypes.Login),
    tap(() => this.authService.loginWithRedirect())
  ), {dispatch: false});

  loginComplete$ = createEffect(() => this.actions$.pipe(
    ofType(AppActionTypes.LoginComplete),
    exhaustMap(() => this.authService.isAuthenticated$.pipe(
      map(result => {
        if (result)
          return loginSuccess();
        else
          return loginFailure()}),
      catchError(() => of(loginFailure()))
    )),
  ));
}
