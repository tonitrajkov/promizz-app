import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { ToastrModule } from 'ngx-toastr';
import { NgbModule, NgbTabsetModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

// Components
import { PeopleAutoselectComponent  } from './components/select/people-autoselect.component';
import { ColorPickerSliderComponent } from './components/colorpicker/color-picker-slider.component';

// Pipes
import { FeatherIconsPipe } from '../shared/pipes/feather.pipe';
import { TranslatePipe } from '../shared/pipes/translate.pipe';

import { EmailValidator } from './directives/email-validator.directive';
import { PromizzDateTimePickerComponent } from './components/datetimepicker/datetimepicker.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ToastrModule.forRoot(),
        NgbTabsetModule,
        NgbTooltipModule,
        NgbModule.forRoot()
    ],
    exports: [
        NgbModule,
        CommonModule,
        FormsModule,
        NgbTabsetModule,
        NgbTooltipModule,

        // Components
        PromizzDateTimePickerComponent,
        PeopleAutoselectComponent,
        ColorPickerSliderComponent,
       
        // Pipes
        FeatherIconsPipe,
        TranslatePipe
    ],
    declarations: [
        FeatherIconsPipe,
        TranslatePipe,
        EmailValidator,
        PromizzDateTimePickerComponent,
        PeopleAutoselectComponent,
        ColorPickerSliderComponent
    ]
})
export class SharedModule { }  