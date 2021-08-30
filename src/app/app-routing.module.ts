import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './components/add/add.component';
import { CategoryComponent } from './components/category/category.component';
import { DetailsComponent } from './components/details/details.component';





const routes: Routes = [
  {path: '', redirectTo: 'category',pathMatch:'full'},
  {path: 'category', component: AddComponent },
  {path: 'category/:id', component: DetailsComponent },
  {path: 'category', component: CategoryComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
