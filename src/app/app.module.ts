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
import { AuthHttpInterceptor, AuthModule } from "@auth0/auth0-angular";
import { FormsModule } from "@angular/forms";
import { WaisIvComponent } from './md/wais-iv/wais-iv.component';
import { PanelComponent } from './panel/panel.component';
import { MdComponent } from './md/md.component';
import { STEPPER_GLOBAL_OPTIONS } from "@angular/cdk/stepper";
import { NgxEchartsModule } from "ngx-echarts";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { VisualReasoningComponent } from './md/barrett/visual-reasoning/visual-reasoning.component';
import { BarrettComponent } from './panel/assessments/barrett/barrett.component';
import { WalletComponent } from './panel/wallet/wallet.component';
import { GardnerComponent } from './panel/assessments/gardner/gardner.component';
import { WaisComponent } from './panel/assessments/wais/wais.component';
import { MmpiComponent } from './panel/assessments/mmpi/mmpi.component';
import { NeoComponent } from './panel/assessments/neo/neo.component';
import { MbtiComponent } from './panel/assessments/mbti/mbti.component';
import { StrongComponent } from './panel/assessments/strong/strong.component';
import { StoreModule } from '@ngrx/store';
import { reducer } from "./state/app.reducer";
import { EffectsModule } from '@ngrx/effects';
import { AuthEffect } from "./state/auth.effects";
import { environment } from "../environments/environment";

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    ToolbarComponent,
    PortalComponent,
    WaisIvComponent,
    PanelComponent,
    MdComponent,
    VisualReasoningComponent,
    BarrettComponent,
    WalletComponent,
    GardnerComponent,
    WaisComponent,
    MmpiComponent,
    NeoComponent,
    MbtiComponent,
    StrongComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    AppRoutingModule,
    AuthModule.forRoot({
      domain: environment.auth.domain,
      clientId: environment.auth.clientID,
      redirectUri: environment.auth.redirect,
      audience: environment.auth.audience,
      scope: environment.auth.scope,
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
    HttpClientModule,
    StoreModule.forRoot({app: reducer}, {}),
    EffectsModule.forRoot([AuthEffect])
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
