import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { UserSectionComponent } from './user-section/user-section.component';
import { FormSectionComponent } from './form-section/form-section.component';

@NgModule({
  declarations: [
    AppComponent,
    UserSectionComponent,
    FormSectionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
