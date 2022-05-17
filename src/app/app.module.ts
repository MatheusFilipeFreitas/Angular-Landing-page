import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NavComponent } from './landing-page/nav/nav.component';
import { ContentComponent } from './landing-page/content/content.component';
import { FooterComponent } from './landing-page/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    NavComponent,
    ContentComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
