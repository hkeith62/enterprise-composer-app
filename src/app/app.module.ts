 /*
============================================
; Title:  App Module.ts
; Author: Professor Krasso
; Date: 01/25/2022
; Modified By: Keith Hall
; Description: App Module of the enterprise-composer-app.
;===========================================
*/
 import { BrowserModule } from '@angular/platform-browser';
 import { NgModule } from '@angular/core';
 import { FormsModule, ReactiveFormsModule } from '@angular/forms';


 import { AppRoutingModule } from './app-routing.module';
 import { AppComponent } from './app.component';
 import { ContactComponent } from './contact/contact.component';
 import { AboutComponent } from './about/about.component';
 import { ComposerListComponent } from './composer-list/composer-list.component';
 import { ComposerDetailsComponent } from './composer-details/composer-details.component';
 import { RouterModule } from '@angular/router';

 @NgModule({
   declarations: [
     AppComponent,
     ContactComponent,
     AboutComponent,
     ComposerListComponent,
     ComposerDetailsComponent
   ],
   imports: [
     BrowserModule,
     AppRoutingModule,
     RouterModule,
     FormsModule,
     ReactiveFormsModule
   ],
   providers: [],
   bootstrap: [AppComponent]
 })
 export class AppModule { }
