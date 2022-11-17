import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { VisualReasoningService } from "../../../services/barrett/visual-reasoning.service";
import { Store } from "@ngrx/store";
import { AppState } from "../../../state/states";
import { loadVisualReasoningTest } from "../../../state/actions/visual-reasoning.action";
import { map, Observable } from "rxjs";
import { VisualReasoning } from "../../../entities/barrett/visual-reasoning.model";
import { selectVisualReasoningSubTest } from "../../../state/selectors/visual-reasoning.selector";

@Component({
  selector: 'app-visual-reasoning',
  templateUrl: './visual-reasoning.component.html',
  styleUrls: ['./visual-reasoning.component.scss']
})
export class VisualReasoningComponent implements OnInit {

  id: string;
  subtest$: Observable<VisualReasoning>;

  constructor(private route: ActivatedRoute,
              private visualReasoningService: VisualReasoningService,
              private store: Store<AppState>) {
    this.id = route.snapshot.paramMap.get("id") as string;
    store.dispatch(loadVisualReasoningTest({testId: this.id}));
    this.subtest$ = store.select(selectVisualReasoningSubTest).pipe(
      map(visualReasoning => visualReasoning as VisualReasoning)
    );
  }

  ngOnInit(): void {
  }

}
