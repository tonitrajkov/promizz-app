import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Pipes
import { FeatherIconsPipe } from '../shared/pipes/feather.pipe';
import { TranslatePipe } from '../shared/pipes/translate.pipe';

import { EmailValidator } from './directives/email-validator.directive';

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    exports: [
        CommonModule,
        FormsModule,
        FeatherIconsPipe,
        TranslatePipe,
    ],
    declarations: [
        FeatherIconsPipe,
        TranslatePipe,
        EmailValidator
    ]
})
export class SharedModule { }  