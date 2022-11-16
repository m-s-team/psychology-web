import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PortalComponent } from "./panel/portal/portal.component";
import { PanelComponent } from "./panel/panel.component";
import { MdComponent } from "./md/md.component";
import { BarrettComponent } from "./panel/assessments/barrett/barrett.component";
import { WalletComponent } from "./panel/wallet/wallet.component";
import { GardnerComponent } from "./panel/assessments/gardner/gardner.component";
import { WaisComponent } from "./panel/assessments/wais/wais.component";
import { MmpiComponent } from "./panel/assessments/mmpi/mmpi.component";
import { NeoComponent } from "./panel/assessments/neo/neo.component";
import { StrongComponent } from "./panel/assessments/strong/strong.component";
import { MbtiComponent } from "./panel/assessments/mbti/mbti.component";
import { CallbackComponent } from "./callback/callback.component";
import { HomeComponent } from "./home/home.component";
import { VisualReasoningComponent } from "./md/barrett/visual-reasoning/visual-reasoning.component";

const routes: Routes = [
  {
    path: 'panel', component: PanelComponent, children: [
      {path: 'portal', component: PortalComponent},
      {path: 'wallet', component: WalletComponent},
      {path: 'barrett', component: BarrettComponent},
      {path: 'gardner', component: GardnerComponent},
      {path: 'wais', component: WaisComponent},
      {path: 'mmpi', component: MmpiComponent},
      {path: 'neo', component: NeoComponent},
      {path: 'mbti', component: MbtiComponent},
      {path: 'strong', component: StrongComponent},
    ]
  },
  {
    path: 'md', component: MdComponent, children: [
      {path: 'barrett/:id/vr', component: VisualReasoningComponent}
    ]
  },
  {path: 'home', component: HomeComponent},
  {path: 'callback', component: CallbackComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {useHash: true})
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
