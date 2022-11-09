import { Component, OnInit } from '@angular/core';
import { BarrettTestService } from "../../../services/barrett/barrett-test.service";
import { BarrettTest } from "../../../entities/barrett/barrett-test.model";

@Component({
  selector: 'app-barrett',
  templateUrl: './barrett.component.html',
  styleUrls: ['./barrett.component.scss']
})
export class BarrettComponent implements OnInit {

  constructor(public barretTestService: BarrettTestService) {
  }

  tests?: BarrettTest[];
  selectedTest = 0;

  ngOnInit(): void {
  }

  findTestById(id: Number): BarrettTest {
    return this.tests?.find(test => test.id === id) as BarrettTest;
  }

}
