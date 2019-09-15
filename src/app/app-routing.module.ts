import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConceptsComponent } from './concepts/concepts.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'concepts',
  },
  {
    path: 'concepts',
    pathMatch: 'full',
    component: ConceptsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
