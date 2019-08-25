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

const routes: Routes = [
    { path: '', redirectTo: 'dashboard' },
    {
        path: '',
        component: SecureComponent,
        children: [
            { path: 'dashboard', component: DashboardComponent },
            { path: 'promises', component: PromiseComponent },
            { path: 'requests', component: RequestComponent },
            { path: 'profile', component: ProfileComponent },
            { path: 'chalenges', component: ChalengeComponent },
            { path: 'achievements', component: AchievementComponent }
        ]
    },
    { path: '**', redirectTo: 'dashboard', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DemoRoutingModule { }