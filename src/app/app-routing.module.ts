import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import {MetroColorsComponent } from '../app/metro-colors/metro-colors.component';
import {FlatColorsComponent } from '../app/flat-colors/flat-colors.component';
import { MaterialColorsComponent } from '../app/material-colors/material-colors.component';
import { HtmlColorsComponent } from '../app/html-colors/html-colors.component';
import { SocialColorsComponent } from './social-colors/social-colors.component';

const routes: Routes = [
  { path: 'materialcolors', component: MaterialColorsComponent },
  { path: 'flatcolors', component: MetroColorsComponent },
  { path: 'socialcolors', component: SocialColorsComponent },
  { path: 'metrocolors', component: MetroColorsComponent }, 
  { path: 'htmlcolors', component: HtmlColorsComponent },
  { path: 'colorgen', component: HtmlColorsComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  declarations: []
})

export class AppRoutingModule { }
