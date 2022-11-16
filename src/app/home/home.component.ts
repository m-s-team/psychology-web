import { Component, OnInit } from '@angular/core';
import { Store } from "@ngrx/store";
import { AppState } from "../state/states";
import { login } from "../state/actions/auth.action";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private store: Store<{app: AppState}>) { }

  ngOnInit(): void {
  }

  onLogin() {
    this.store.dispatch(login());
  }
}
