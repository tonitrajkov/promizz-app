import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FriendsComponent } from './friends/friends.component';
import { SettingsComponent } from './settings/settings.component';
import { ProfileComponent } from './profile.component';

const routes: Routes = [
    { path: '', component: ProfileComponent, children: [
        { path: 'friends', component: FriendsComponent },
        { path: 'settings', component: SettingsComponent }
    ]}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProfileRoutingModule { }