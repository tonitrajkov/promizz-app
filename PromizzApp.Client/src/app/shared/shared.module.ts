import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ToastrModule } from 'ngx-toastr';
import { NgbModule, NgbTabsetModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

// Directives
import { ScrollTrackerDirective } from './directives/scroll-tracker.directive';
import { EmailValidator } from './directives/email-validator.directive';

// Components
import { PeopleAutoselectComponent } from './components/select/people-autoselect.component';
import { ColorPickerSliderComponent } from './components/colorpicker/color-picker-slider.component';
import { PromiseGridComponent } from './components/promisegrid/promisegrid.component';
import { PromizzDateTimePickerComponent } from './components/datetimepicker/datetimepicker.component';
import { AvatarComponent } from './components/avatar/avatar.component';

// Pipes
import { FeatherIconsPipe } from '../shared/pipes/feather.pipe';
import { TranslatePipe } from '../shared/pipes/translate.pipe';

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

        // Directives
        ScrollTrackerDirective,

        // Components
        PromizzDateTimePickerComponent,
        PeopleAutoselectComponent,
        ColorPickerSliderComponent,
        PromiseGridComponent,
        AvatarComponent,

        // Pipes
        FeatherIconsPipe,
        TranslatePipe
    ],
    declarations: [
        FeatherIconsPipe,
        TranslatePipe,
        EmailValidator,
        ScrollTrackerDirective,
        PromizzDateTimePickerComponent,
        PeopleAutoselectComponent,
        ColorPickerSliderComponent,
        PromiseGridComponent,
        AvatarComponent
    ]
})
export class SharedModule { }  