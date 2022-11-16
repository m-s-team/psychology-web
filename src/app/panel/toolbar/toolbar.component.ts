import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { AuthService } from "@auth0/auth0-angular";
import { DOCUMENT } from "@angular/common";
import { Store } from "@ngrx/store";
import { AppState } from "../../state/states";
import { login } from "../../state/actions/auth.action";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  constructor(
    @Inject(DOCUMENT) public document: Document,
    private store: Store<{app: AppState}>,
    public auth: AuthService) { }

  @Output() sidenavToggle = new EventEmitter<void>();

  ngOnInit(): void {
  }

  onLogin() {
    this.store.dispatch(login());
  }
}

