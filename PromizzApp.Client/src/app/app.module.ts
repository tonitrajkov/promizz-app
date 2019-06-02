import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { JsonpModule } from '@angular/http';

// Modules
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';

import { PublicModule } from './public/public.module';

// Components
import { SecureComponent } from './_layouts/secure/secure.component';

import { PromiseAppComponent } from './promise-app.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { PromiseAddModalComponent, PromiseService } from './promises';

@NgModule({
  declarations: [
    PromiseAppComponent,
    DashboardComponent,
    SecureComponent,
    PromiseAddModalComponent
  ],
  imports: [
    SharedModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    HttpClientJsonpModule,
    FormsModule,
    JsonpModule,
    ReactiveFormsModule,
    CoreModule,
    AppRoutingModule,
    PublicModule
  ],
  entryComponents: [
    PromiseAddModalComponent
  ],
  providers: [PromiseService],
  bootstrap: [PromiseAppComponent]
})
export class AppModule { }