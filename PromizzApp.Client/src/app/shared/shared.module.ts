import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {EmailValidator} from './directives/email-validator.directive';

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    exports: [
        CommonModule,
        FormsModule
    ],
    declarations: [
        EmailValidator
    ]
})
export class SharedModule { }  