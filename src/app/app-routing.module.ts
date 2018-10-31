import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { HomeComponent } from './home/home.component';
import { EnterpriseComponent } from './enterprise/enterprise.component';
import { PersonalComponent } from './personal/personal.component';
import { MakepayComponent } from './makepay/makepay.component';
const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'enterprise', component: EnterpriseComponent},
  {path: 'personal', component: PersonalComponent},
  {path: 'payments', component: MakepayComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
