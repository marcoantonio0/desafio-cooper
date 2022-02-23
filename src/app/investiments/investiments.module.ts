import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';

import { InvestimentsRoutingModule } from './investiments-routing.module';
import { InvestimentsComponent } from './investiments.component';
import { RescueComponent } from './rescue/rescue.component';
import {MatCardModule} from '@angular/material/card';
import { ListComponent } from './list/list.component';
import {MatTableModule} from '@angular/material/table';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatIconModule} from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import {MatListModule} from '@angular/material/list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { CurrencyMaskConfig, CurrencyMaskInputMode, NgxCurrencyModule } from "ngx-currency";
import {MatDialogModule} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

export const customCurrencyMaskConfig: CurrencyMaskConfig = {
  align: "left",
  allowNegative: false,
  allowZero: false,
  decimal: ",",
  precision: 2,
  prefix: "R$ ",
  suffix: "",
  thousands: ".",
  nullable: true,
  inputMode: CurrencyMaskInputMode.FINANCIAL
};

@NgModule({
  declarations: [
    InvestimentsComponent,
    RescueComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    NgxCurrencyModule.forRoot(customCurrencyMaskConfig),
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatTableModule,
    InvestimentsRoutingModule
  ],
  providers: [
    CurrencyPipe
  ]
})
export class InvestimentsModule { }
