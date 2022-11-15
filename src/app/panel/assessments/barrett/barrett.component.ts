import { Component, OnInit } from '@angular/core';
import { BarrettTest } from "../../../entities/barrett/barrett-test.model";
import { Store } from "@ngrx/store";
import { AppState } from "../../../state/app.state";
import { Observable } from "rxjs";
import { selectBarrettTests, selectSelectedBarrettTest } from "../../../state/app.selector";
import { createBarrettTest, deleteSelectedBarrettTest, setSelectedBarrettTestIndex } from "../../../state/app.action";

@Component({
  selector: 'app-barrett',
  templateUrl: './barrett.component.html',
  styleUrls: ['./barrett.component.scss']
})
export class BarrettComponent implements OnInit {

  tests$: Observable<BarrettTest[]>;
  selectedTest$:  Observable<number>;

  constructor(private store: Store<AppState>) {
    this.tests$ = store.select(selectBarrettTests);
    this.selectedTest$ = store.select(selectSelectedBarrettTest);
  }

  ngOnInit(): void {
  }

  onTestChange(value: number) {
    this.store.dispatch(setSelectedBarrettTestIndex({index: value}))
  }

  onCreateTest() {
    this.store.dispatch(createBarrettTest());
  }

  onDeleteTest() {
    this.store.dispatch(deleteSelectedBarrettTest());
  }
}
