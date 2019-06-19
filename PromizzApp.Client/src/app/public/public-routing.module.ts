import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { PublicComponent } from '../_layouts/public/public.component';
import { PublicHomeComponent } from './public-home/public-home.component';
import { PricingComponent } from './pricing/pricing.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [
  {
    path: '',
    component: PublicComponent,
    children: [
      { path: '', component: PublicHomeComponent, pathMatch: 'full' },
      { path: 'pricing', component: PricingComponent },
      { path: 'contact1', component: ContactComponent },
      { path: 'contact2', component: ContactComponent },
      { path: 'contact3', component: ContactComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
