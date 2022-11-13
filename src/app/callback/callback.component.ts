import { Component, OnInit } from '@angular/core';
import { Store } from "@ngrx/store";
import { AppState } from "../state/app.state";
import { loginComplete } from "../state/app.action";

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.scss']
})
export class CallbackComponent implements OnInit {

  constructor(private store: Store<{app: AppState}>) { }

  ngOnInit(): void {
    this.store.dispatch(loginComplete());
  }

}
