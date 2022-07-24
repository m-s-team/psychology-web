import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PortalComponent } from "./panel/portal/portal.component";
import { AssessmentsComponent } from "./panel/assessments/assessments.component";
import { WaisIvComponent } from "./md/wais-iv/wais-iv.component";
import { PanelComponent } from "./panel/panel.component";
import { MdComponent } from "./md/md.component";

const routes: Routes = [
  {path: 'panel', component: PanelComponent, children: [
      {path: 'portal', component: PortalComponent},
      {path: 'assessments', component: AssessmentsComponent}
    ]
  },
  {path: 'md', component: MdComponent, children: [
      {path: 'WAIS-IV', component: WaisIvComponent}
    ]
  },
  {path: '', redirectTo: '/panel/portal', pathMatch: 'full'},
  {path: '**', redirectTo: '/panel/portal', pathMatch: 'full'}
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
