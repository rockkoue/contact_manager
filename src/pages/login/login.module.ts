import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginPage } from './login';
import { AccueilPage } from '../accueil/accueil';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    LoginPage,
    AccueilPage
  ],
  imports: [
    BrowserModule,
    IonicPageModule.forChild(LoginPage),
  ],
  entryComponents: [
    LoginPage,
    AccueilPage
  ]
})
export class LoginPageModule {}
