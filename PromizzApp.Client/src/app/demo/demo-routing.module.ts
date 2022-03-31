import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { SecureComponent } from '../_layouts/secure/secure.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PromiseComponent } from './promises/promise.component';
import { RequestComponent } from './promises/request.component';
import { ProfileComponent } from './profile/profile.component';
import { ChalengeComponent } from './chalenges/chalenge.component';
import { AchievementComponent } from './achievements/achievement.component';
import { PersonalInfoComponent } from './profile/personal/personal-info.component';
import { FriendsComponent } from './profile/friends/friends.component';
import { SettingsComponent } from './profile/settings/settings.component';

const routes: Routes = [
    { path: '', redirectTo: 'dashboard' },
    {
        path: '',
        component: SecureComponent,
        children: [
            { path: 'dashboard', component: DashboardComponent },
            { path: 'promises', component: PromiseComponent },
            { path: 'requests', component: RequestComponent },
            {
                path: 'profile', component: ProfileComponent, children: [
                    { path: '', redirectTo: 'personal' },
                    { path: 'personal', component: PersonalInfoComponent },
                    { path: 'friends', component: FriendsComponent },
                    { path: 'settings', component: SettingsComponent },
                    { path: '**', redirectTo: 'personal', pathMatch: 'full' }
                ]
            },
            { path: 'chalenges', component: ChalengeComponent },
            { path: 'achievements', component: AchievementComponent }
        ]
    },
    { path: '**', redirectTo: 'dashboard', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DemoRoutingModule { }