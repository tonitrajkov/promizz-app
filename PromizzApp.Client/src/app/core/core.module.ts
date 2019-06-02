import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

// Components
import { PublicHeaderComponent } from './public/header/header.component';
import { PublicFooterComponent } from './public/footer/footer.component';
import { SecureHeaderComponent } from './secure/header/header.component';
import { NavBarComponent } from './secure/navbar/navbar.component';
import { MvpFooterComponent } from './public/footer/mvp-footer.component';
import { MvpHeaderComponent } from './public/header/mvp-header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    SharedModule
  ],
  declarations: [
    PublicHeaderComponent,
    PublicFooterComponent,
    SecureHeaderComponent,
    NavBarComponent,

    MvpFooterComponent,
    MvpHeaderComponent
  ],
  providers: [ ],
  exports: [
    PublicHeaderComponent,
    PublicFooterComponent,
    SecureHeaderComponent,
    NavBarComponent,

    MvpFooterComponent,
    MvpHeaderComponent
  ]
})
export class CoreModule { }