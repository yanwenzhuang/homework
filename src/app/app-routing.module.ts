import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent }      from './component/first/first.component';
import { SecondComponent }      from './component/second/second.component';

const routes: Routes = [
  { path: 'first', component: FirstComponent },
  { path: '', redirectTo: '/first', pathMatch: 'full' },
  { path: 'second', component: SecondComponent }
];

@NgModule({
  declarations: [],
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }
