import { Component, Input, OnInit } from '@angular/core';
import { map, Observable, takeWhile, tap, timer } from "rxjs";

@Component({
  selector: 'app-exam-cp',
  templateUrl: './exam-cp.component.html',
  styleUrls: ['./exam-cp.component.scss']
})
export class ExamCpComponent implements OnInit {

  @Input() title: string = "";
  @Input() id: number = 0;
  @Input() type: string = "تستی";
  @Input() createdDate: Date = new Date();
  @Input() requiredTime: number = 10;
  @Input() questionCount: number = 0;
  @Input() answeredCount: number = 0;

  Date = Date;

  endTime: Date = new Date();

  remain$: Observable<number> = timer(this.createdDate, 1000).pipe(
    map(() => {
      let endTime = new Date(this.createdDate);
      endTime.setMinutes(this.createdDate.getMinutes() + this.requiredTime);
      return endTime;
    }),
    map(endTime => Math.floor((endTime.getTime() - Date.now()) / 1000)),
    takeWhile(s => s >= 0)
  );

  remainTime$: Observable<Date> = this.remain$.pipe(
    map(s => {
      let date = new Date("2000T00:00:00");
      date.setSeconds(s);
      return date;
    }),
    tap(console.log)
  );

  remainPercentage$: Observable<number> = this.remain$.pipe(
    map(s => {
      return 100 * s / (this.requiredTime * 60);
    })
  );

  constructor() {
  }

  ngOnInit(): void {
  }

}
