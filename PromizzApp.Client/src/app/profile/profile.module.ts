import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { ProfileRoutingModule } from './profile-routing.module';
import { SharedModule } from '../shared/shared.module';

// Components
import {
    ProfileDetailsComponent, FriendsComponent,
    SettingsComponent, ProfileComponent, ProfileService
} from './';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        ProfileRoutingModule
    ],
    declarations: [
        ProfileComponent,
        ProfileDetailsComponent,
        FriendsComponent,
        SettingsComponent
    ],
    providers: [ProfileService]
})
export class ProfileModule { }
