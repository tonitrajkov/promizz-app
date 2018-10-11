import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ToastrModule } from 'ngx-toastr';
import { NgbTabsetModule } from '@ng-bootstrap/ng-bootstrap';

// Pipes
import { FeatherIconsPipe } from '../shared/pipes/feather.pipe';
import { TranslatePipe } from '../shared/pipes/translate.pipe';

import { EmailValidator } from './directives/email-validator.directive';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ToastrModule.forRoot(),
        NgbTabsetModule
    ],
    exports: [
        CommonModule,
        FormsModule,
        FeatherIconsPipe,
        TranslatePipe,
        NgbTabsetModule
    ],
    declarations: [
        FeatherIconsPipe,
        TranslatePipe,
        EmailValidator
    ]
})
export class SharedModule { }  