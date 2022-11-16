import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { VisualReasoningService } from "../../../services/barrett/visual-reasoning.service";
import { tap } from "rxjs";

@Component({
  selector: 'app-visual-reasoning',
  templateUrl: './visual-reasoning.component.html',
  styleUrls: ['./visual-reasoning.component.scss']
})
export class VisualReasoningComponent implements OnInit {

  id: string;

  constructor(private route: ActivatedRoute, private visualReasoningService: VisualReasoningService) {
    this.id = route.snapshot.paramMap.get("id") as string;
  }

  ngOnInit(): void {
    this.visualReasoningService.createByTestId(this.id).pipe(
      tap(res => console.log(res))
    ).subscribe();
  }

}
