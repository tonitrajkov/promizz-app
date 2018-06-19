import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// Components
import { HomeComponent } from './home/home.component';
import { PricingComponent } from './pricing/pricing.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { ProductComponent } from './product/product.component';
import { SecurityComponent } from './security/security.component';
import { TermOfServicesComponent } from './term-of-services/term-of-services.component';


const routes: Routes = [
  // { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: '', component: HomeComponent, pathMatch: 'full',
    children: [
      { path: 'pricing', component: PricingComponent },
      { path: 'privacy', component: PrivacyComponent },
      { path: 'product', component: ProductComponent },
      { path: 'security', component: SecurityComponent },
      { path: 'termofservices', component: TermOfServicesComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }