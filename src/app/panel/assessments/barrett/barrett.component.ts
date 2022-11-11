import { Component, OnInit } from '@angular/core';
import { BarrettTest } from "../../../entities/barrett/barrett-test.model";
import { Store } from "@ngrx/store";
import { AppState } from "../../../state/app.state";
import { Observable } from "rxjs";
import { selectBarrettTests, selectSelectedBarrettTest } from "../../../state/app.selector";

@Component({
  selector: 'app-barrett',
  templateUrl: './barrett.component.html',
  styleUrls: ['./barrett.component.scss']
})
export class BarrettComponent implements OnInit {

  tests$: Observable<BarrettTest[]>;
  selectedTest$:  Observable<number>;

  constructor(private store: Store<{app: AppState}>) {
    this.tests$ = store.select(selectBarrettTests);
    this.selectedTest$ = store.select(selectSelectedBarrettTest);
  }

  ngOnInit(): void {
  }
}
