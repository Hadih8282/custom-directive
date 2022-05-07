import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ColorfulDirective } from './colorful.directive';
import { AppHighlightDirective } from './app-highlight.directive';
import { CrouselDirective } from './crousel.directive';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    ColorfulDirective,
    AppHighlightDirective,
    CrouselDirective,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
