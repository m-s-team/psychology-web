import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { VisualReasoningService } from "../../../services/barrett/visual-reasoning.service";
import { Store } from "@ngrx/store";
import { AppState } from "../../../state/states";
import { createVisualReasoningTest, getVisualReasoningTest } from "../../../state/actions/visual-reasoning.action";
import { map, Observable, take } from "rxjs";
import { VisualReasoning, VisualReasoningTestType } from "../../../entities/barrett/visual-reasoning.model";
import {
  selectVisualReasoningLoading,
  selectVisualReasoningSubTest
} from "../../../state/selectors/visual-reasoning.selector";
import { selectBarrettTest } from "../../../state/selectors/barrett.selector";

@Component({
  selector: 'app-visual-reasoning',
  templateUrl: './visual-reasoning.component.html',
  styleUrls: ['./visual-reasoning.component.scss']
})
export class VisualReasoningComponent implements OnInit {

  barretTestId: number;
  subtest$: Observable<VisualReasoning>;
  loading$: Observable<boolean>;
  VisualReasoningTestType = VisualReasoningTestType;

  constructor(private route: ActivatedRoute,
              private visualReasoningService: VisualReasoningService,
              private store: Store<AppState>) {
    this.barretTestId = Number(route.snapshot.paramMap.get("id") as string);
    this.subtest$ = store.select(selectVisualReasoningSubTest).pipe(
      map(visualReasoning => visualReasoning as VisualReasoning)
    );
    this.loading$ = store.select(selectVisualReasoningLoading);
  }

  ngOnInit(): void {
    this.store.select(selectBarrettTest).pipe(take(1)).subscribe(s => {
      if (s.tests.find(test => test.id == this.barretTestId)?.visualReasoningSubtest.createdDate === null)
        this.store.dispatch(createVisualReasoningTest({barrettTestId: this.barretTestId}))
      else
        this.store.dispatch(getVisualReasoningTest({barrettTestId: this.barretTestId}));
    });
  }

}
