import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConceptsComponent } from './concepts/concepts.component';
import { SubjectService } from './subjects/subject.service';

@NgModule({
  declarations: [
    AppComponent,
    ConceptsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    SubjectService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
