import { Component, OnInit } from '@angular/core';
import { Store } from "@ngrx/store";
import { AppState } from "./state/app.state";
import { checkLogin } from "./state/app.action";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'روانشناسی';
  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.store.dispatch(checkLogin());
  }
}
