import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Modules
import { DemoRoutingModule } from './demo-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';

// Services
import { DemoService } from './demo.service';

// Components
import { SecureComponent } from '../_layouts/secure/secure.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PromiseComponent } from './promises/promise.component';
import { RequestComponent } from './promises/request.component';
import { ProfileComponent } from './profile/profile.component';
import { ChalengeComponent } from './chalenges/chalenge.component';
import { AchievementComponent } from './achievements/achievement.component';

@NgModule({
    declarations: [
        SecureComponent,
        DashboardComponent,
        PromiseComponent,
        RequestComponent,
        ProfileComponent,
        ChalengeComponent,
        AchievementComponent
    ],
    imports: [
        FormsModule,
        ReactiveFormsModule,
        CoreModule,
        CommonModule,
        SharedModule,
        DemoRoutingModule
    ],
    exports: [],
    providers: [
        DemoService
    ]
})
export class DemoModule { }