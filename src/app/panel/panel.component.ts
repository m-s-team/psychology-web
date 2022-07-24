import { Component, OnInit } from '@angular/core';
import { MediaObserver } from "@angular/flex-layout";

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {

  constructor(public mediaObserver: MediaObserver) { }

  ngOnInit(): void {
  }

}
