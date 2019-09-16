import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConceptsComponent } from './concepts/concepts.component';
import { Example01Component } from './example01/example01.component';

import { SubjectService } from './subjects/subject.service';
import { BehaviorSubjectService } from './subjects/behavior-subject.service';

@NgModule({
  declarations: [
    AppComponent,
    ConceptsComponent,
    Example01Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    SubjectService,
    BehaviorSubjectService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
