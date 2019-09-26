import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule, MatButtonModule,MatToolbarModule,MatIconModule,MatListModule} from '@angular/material';

import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';

import { LoginFormComponent } from './components/login/login';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { TableComponentComponent } from './table-component/table-component.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LoginFormComponent,
    TableComponentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    RouterModule.forRoot([]),
    LayoutModule,
    ReactiveFormsModule,
    MaterialModule,

  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
