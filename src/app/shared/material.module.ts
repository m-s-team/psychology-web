import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatMenuModule } from "@angular/material/menu";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatStepperModule } from "@angular/material/stepper";
import { MatTableModule } from "@angular/material/table";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatBadgeModule } from "@angular/material/badge";

@NgModule({
  declarations: [],
  imports: [
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatRadioModule,
    MatSelectModule,
    MatFormFieldModule,
    MatTabsModule,
    MatMenuModule,
    MatExpansionModule,
    MatStepperModule,
    MatTableModule,
    MatButtonToggleModule,
    MatBadgeModule
  ],
  exports: [
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatRadioModule,
    MatSelectModule,
    MatFormFieldModule,
    MatTabsModule,
    MatMenuModule,
    MatExpansionModule,
    MatStepperModule,
    MatTableModule,
    MatButtonToggleModule,
    MatBadgeModule
  ]
})
export class MaterialModule {
}
