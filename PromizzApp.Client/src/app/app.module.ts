import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Modules
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';

import { AuthModule } from './auth/auth.module';
//import { ProfileModule } from './profile/profile.module';
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

import { SigninCbComponent } from './shared/oidc-calbacks/signin-cb.component';
import { RedirectSilentRenewComponent } from './shared/oidc-calbacks/redirect-silent-renew.component';
import { PromiseAddModalComponent, PromiseService } from './promises';

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
    TermOfServicesComponent,
    SigninCbComponent,
    RedirectSilentRenewComponent,
    PromiseAddModalComponent
  ],
  imports: [
    SharedModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    CoreModule,
    AuthModule,
    AppRoutingModule
  ],
  entryComponents: [
    PromiseAddModalComponent
  ],
  providers: [PromiseService],
  bootstrap: [PromiseAppComponent]
})
export class AppModule { }