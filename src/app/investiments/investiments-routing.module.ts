import { ListComponent } from './list/list.component';
import { RescueComponent } from './rescue/rescue.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvestimentsComponent } from './investiments.component';

const routes: Routes = [
  { path: '', component: InvestimentsComponent, children: [
    { path: '', component: ListComponent },
    { path: 'rescue/:index', component: RescueComponent }
  ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvestimentsRoutingModule { }
