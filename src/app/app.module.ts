import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import {SuccessAlertComponent} from "./success-alert/success-alert.component";
import { CustomUserAlertComponent } from './custom-user-alert/custom-user-alert.component';

@NgModule({
  declarations: [
    AppComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    CustomUserAlertComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
