import { Component, Input, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

}
