import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Modules
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';

import { AuthModule } from './auth/auth.module';
// import { PublicModule } from './public/public.module';

// Components
import { PublicComponent } from './_layouts/public/public.component';
import { SecureComponent } from './_layouts/secure/secure.component';

import { PromiseAppComponent } from './promise-app.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { HomeComponent } from './public/home/home.component';
import { PricingComponent } from './public/pricing/pricing.component';
import { PrivacyComponent } from './public/privacy/privacy.component';
import { ProductComponent } from './public/product/product.component';
import { SecurityComponent } from './public/security/security.component';
import { TermOfServicesComponent } from './public/term-of-services/term-of-services.component';

@NgModule({
  declarations: [
    PromiseAppComponent,
    DashboardComponent,
    PublicComponent,
    SecureComponent,
    HomeComponent,
    PricingComponent,
    PrivacyComponent,
    ProductComponent,
    SecurityComponent,
    TermOfServicesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CoreModule,
    SharedModule,
    AuthModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [PromiseAppComponent]
})
export class AppModule { }
///http://jasonwatmore.com/post/2018/05/23/angular-6-jwt-authentication-example-tutorial