import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConceptsComponent } from './concepts/concepts.component';
import { Example01Component } from './example01/example01.component';


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
  },
  {
    path: 'example01',
    pathMatch: 'full',
    component: Example01Component,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
