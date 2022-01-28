 import { BrowserModule } from '@angular/platform-browser';
 import { NgModule } from '@angular/core';

 import { AppRoutingModule } from './app-routing.module';
 import { AppComponent } from './app.component';
 import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 import {MatToolbarModule} from '@angular/material/toolbar';
 import {MatIconModule} from '@angular/material/icon';
 import {MatTableModule} from '@angular/material/table';
 import {MatButtonModule} from '@angular/material/button';
 import {MatProgressBarModule} from '@angular/material/progress-bar';
 import {MatInputModule} from '@angular/material/input';
 import {FlexLayoutModule} from '@angular/flex-layout';
 import {MatSidenavModule} from '@angular/material/sidenav';
 import {MatListModule} from '@angular/material/list';
 import {MatTabsModule} from '@angular/material/tabs';
import { KapitelComponent } from './kapitel/kapitel.component';
import { Inhalt11Component } from './kapitel-inhalt-1/inhalt11/inhalt11.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { NavigationComponent } from './navigation/navigation.component';

 @NgModule({
  declarations: [
    AppComponent,
    KapitelComponent,
    Inhalt11Component,
    ToolbarComponent,
    NavigationComponent
  ],
   imports: [
     BrowserModule,
     AppRoutingModule,
     BrowserAnimationsModule,
     MatToolbarModule,
     MatIconModule,
     MatTableModule,
     MatButtonModule,
     MatProgressBarModule,
     MatInputModule,
     FlexLayoutModule,
     MatSidenavModule,
     MatListModule,
     MatTabsModule
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
