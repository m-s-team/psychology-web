import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { AppActionTypes } from "./app.action";
import { tap } from "rxjs";
import { AuthService } from "@auth0/auth0-angular";

@Injectable()
export class AuthEffect {

  constructor(private actions$: Actions, private authService: AuthService) { }

  login$ = createEffect(() => this.actions$.pipe(
    ofType(AppActionTypes.Login),
    tap(() => this.authService.loginWithRedirect())
  ), {dispatch: false});
}
