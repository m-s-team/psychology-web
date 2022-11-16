import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { AuthActionTypes, loginFailure, loginSuccess } from "../actions/auth.action";
import { catchError, exhaustMap, map, of, tap } from "rxjs";
import { AuthService } from "@auth0/auth0-angular";

@Injectable()
export class AuthEffect {

  constructor(private actions$: Actions, private authService: AuthService) { }

  login$ = createEffect(() => this.actions$.pipe(
    ofType(AuthActionTypes.Login),
    tap(() => this.authService.loginWithRedirect({
      appState: { target: '/panel/portal'}
    }))
  ), {dispatch: false});

  checkLogin$ = createEffect(() => this.actions$.pipe(
    ofType(AuthActionTypes.CheckLogin, AuthActionTypes.LoginComplete),
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
