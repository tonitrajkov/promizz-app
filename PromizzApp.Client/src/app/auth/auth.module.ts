import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { AuthtRoutingModule } from './auth-routing.module';
import { SharedModule } from '../shared/shared.module';

// Directives 
// import { EmailValidator} from  '../shared/directives/email-validator.directive';

// Components
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './signup/signup.component';
import { ForgotComponent } from './forgot/forgot.component';

@NgModule({
    declarations: [
        LoginComponent,
        SignUpComponent,
        ForgotComponent
    ],
    imports: [
        CommonModule,
        AuthtRoutingModule,
        SharedModule
    ],
    exports: [],
    providers: []
})
export class AuthModule { }