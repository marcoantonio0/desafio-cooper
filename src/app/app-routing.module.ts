import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '',   redirectTo: '/investiments', pathMatch: 'full' },
  { path: 'investiments', loadChildren: () => import('./investiments/investiments.module').then(m => m.InvestimentsModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
