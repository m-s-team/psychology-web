import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from "./shared/material.module";
import { SidenavComponent } from './sidenav/sidenav.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import { AppRoutingModule } from "./app-routing.module";
import { PortalComponent } from './portal/portal.component';
import { AssessmentsComponent } from './assessments/assessments.component';
import { AuthModule } from "@auth0/auth0-angular";

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    ToolbarComponent,
    PortalComponent,
    AssessmentsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    AppRoutingModule,
    AuthModule.forRoot({
      domain: "dev-41tfcxyn.us.auth0.com",
      clientId: "CsKG8IB5gjo4XJLU0nqeaNnWvu0CDiKT"
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
