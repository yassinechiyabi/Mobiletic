import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddServerComponent } from './add-server/add-server.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [{ path: 'add', component: AddServerComponent }
,{path: 'list', component: ListComponent},{path: '', component: ListComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
