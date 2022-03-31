import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ToastrModule } from 'ngx-toastr';
import { NgbModule, NgbTabsetModule, NgbTooltipModule, NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';

// Directives
import { ScrollTrackerDirective } from './directives/scroll-tracker.directive';
import { EmailValidator } from './directives/email-validator.directive';
import { FocusDirective } from './directives/focus.directive';
import { AutosizeDirective } from './directives/autosize.directive';
import { InViewportDirective } from './directives/in-viewport.directive';

// Components
import { PeopleAutoselectComponent } from './components/select/people-autoselect.component';
import { ColorPickerSliderComponent } from './components/colorpicker/color-picker-slider.component';
import { PromiseGridComponent } from './components/promisegrid/promisegrid.component';
import { PromizzDateTimePickerComponent } from './components/datetimepicker/datetimepicker.component';
import { AvatarComponent } from './components/avatar/avatar.component';
import { InviteDialogComponent } from './dialogs/invite-dialog.component';

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
        NgbPopoverModule,
        NgbModule.forRoot()
    ],
    exports: [
        NgbModule,
        CommonModule,
        FormsModule,
        NgbTabsetModule,
        NgbTooltipModule,
        NgbPopoverModule,

        // Directives
        ScrollTrackerDirective,
        FocusDirective,
        AutosizeDirective,
        InViewportDirective,

        // Components
        PromizzDateTimePickerComponent,
        PeopleAutoselectComponent,
        ColorPickerSliderComponent,
        PromiseGridComponent,
        AvatarComponent,
        InviteDialogComponent,

        // Pipes
        FeatherIconsPipe,
        TranslatePipe
    ],
    declarations: [
        // Pipes
        FeatherIconsPipe,
        TranslatePipe,

        // Directives
        EmailValidator,
        ScrollTrackerDirective,
        FocusDirective,
        AutosizeDirective,
        InViewportDirective,

        // Components
        PromizzDateTimePickerComponent,
        PeopleAutoselectComponent,
        ColorPickerSliderComponent,
        PromiseGridComponent,
        AvatarComponent,
        InviteDialogComponent
    ],
    entryComponents: [
        InviteDialogComponent
    ]
})
export class SharedModule { }
