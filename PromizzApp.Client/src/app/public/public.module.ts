import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { PublicRoutingModule } from './public-routing.module';
import { SharedModule } from '../shared/shared.module';

// Directives 
// import { EmailValidator} from  '../shared/directives/email-validator.directive';

// Components
import { HomeComponent } from './home/home.component';
import { PricingComponent } from './pricing/pricing.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { ProductComponent } from './product/product.component';
import { SecurityComponent } from './security/security.component';
import { TermOfServicesComponent } from './term-of-services/term-of-services.component';

@NgModule({
    declarations: [
        HomeComponent,
        PricingComponent,
        PrivacyComponent,
        ProductComponent,
        SecurityComponent,
        TermOfServicesComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        PublicRoutingModule
    ],
    exports: [],
    providers: []
})
export class PublicModule { }