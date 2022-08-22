import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from "./shared/material.module";
import { SidenavComponent } from './panel/sidenav/sidenav.component';
import { ToolbarComponent } from './panel/toolbar/toolbar.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import { AppRoutingModule } from "./app-routing.module";
import { PortalComponent } from './panel/portal/portal.component';
import { AssessmentsComponent } from './panel/assessments/assessments.component';
import { AuthHttpInterceptor, AuthModule } from "@auth0/auth0-angular";
import { FormsModule } from "@angular/forms";
import { WaisIvComponent } from './md/wais-iv/wais-iv.component';
import { PanelComponent } from './panel/panel.component';
import { MdComponent } from './md/md.component';
import { STEPPER_GLOBAL_OPTIONS } from "@angular/cdk/stepper";
import { NgxEchartsModule } from "ngx-echarts";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { BarrettComponent } from './md/barrett/barrett.component';
import { VisualReasoningComponent } from './md/barrett/visual-reasoning/visual-reasoning.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    ToolbarComponent,
    PortalComponent,
    AssessmentsComponent,
    WaisIvComponent,
    PanelComponent,
    MdComponent,
    BarrettComponent,
    VisualReasoningComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    AppRoutingModule,
    AuthModule.forRoot({
      domain: "dev-41tfcxyn.us.auth0.com",
      clientId: "CsKG8IB5gjo4XJLU0nqeaNnWvu0CDiKT",
      audience: "https://api.psychology.ml/",
      scope: "openid profile email",
      httpInterceptor: {
        allowedList: [
          {
            uri: "http://localhost:8080/*",
            tokenOptions: {
              audience: "https://api.psychology.ml/",
              scope: "openid profile email",
            }
          },
          {
            uri: "https://api.psychology.ml/*",
            tokenOptions: {
              audience: "https://api.psychology.ml/",
              scope: "openid profile email",
            }
          }
        ]
      }

    }),
    FormsModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    }),
    HttpClientModule
  ],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: {displayDefaultIndicatorType: false}
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthHttpInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
