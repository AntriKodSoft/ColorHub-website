import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { MaterialColorsComponent } from './material-colors/material-colors.component';
import { FlatColorsComponent } from './flat-colors/flat-colors.component';
import { SocialColorsComponent } from './social-colors/social-colors.component';
import { MetroColorsComponent } from './metro-colors/metro-colors.component';
import { HtmlColorsComponent } from './html-colors/html-colors.component';


@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    MaterialColorsComponent,
    FlatColorsComponent,
    SocialColorsComponent,
    MetroColorsComponent,
    HtmlColorsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
