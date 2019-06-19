import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Modules
import { PublicRoutingModule } from './public-routing.module';
import { SharedModule } from '../shared/shared.module';

// Components
import { PublicComponent } from '../_layouts/public/public.component';
import { CoreModule } from '../core/core.module';
import { ContactService } from './contact/contact.service';
import { PublicHomeComponent } from './public-home/public-home.component';
import { PricingComponent } from './pricing/pricing.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
    declarations: [
        PublicComponent,
        PublicHomeComponent,
        PricingComponent,
        ContactComponent
    ],
    imports: [
        FormsModule,
        ReactiveFormsModule,
        CoreModule,
        CommonModule,
        SharedModule,
        PublicRoutingModule
    ],
    exports: [],
    providers: [ContactService]
})
export class PublicModule { }
