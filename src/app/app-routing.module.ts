import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PortalComponent } from "./portal/portal.component";
import { AssessmentsComponent } from "./assessments/assessments.component";

const routes: Routes = [
  {path: 'portal', component: PortalComponent},
  {path: 'assessments', component: AssessmentsComponent},
  {path: '', redirectTo: '/portal', pathMatch: 'full'},
  {path: '**', redirectTo: '/portal', pathMatch: 'full'}
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
