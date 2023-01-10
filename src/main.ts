import {importProvidersFrom} from '@angular/core';
import {bootstrapApplication, BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {AppComponent} from './app/app.component';
import {routes} from './app/app-routing.module';
import {HttpClientModule} from '@angular/common/http';

bootstrapApplication(
  AppComponent,
  {
    providers: [
      importProvidersFrom(RouterModule.forRoot(routes)),
      importProvidersFrom(HttpClientModule),
    ],
  },
);
