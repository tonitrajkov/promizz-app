import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './core/auth.guard';
// import { AuthService } from './core/auth.service';
import { AuthModule } from './auth/auth.module';
import { PublicModule } from './public/public.module';

// Components
import { NotAuthorizedComponent } from './shared/not-authorized/not-authorized.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { PublicComponent } from './_layouts/public/public.component';
import { SecureComponent } from './_layouts/secure/secure.component';

import { DashboardComponent } from './dashboard/dashboard.component';

import { SigninCbComponent } from './shared/oidc-calbacks/signin-cb.component';
import { RedirectSilentRenewComponent } from './shared/oidc-calbacks/redirect-silent-renew.component';

const routes: Routes = [
    // { path: '', redirectTo: '/home', pathMatch: 'full', },
    // {
    //     path: '',
    //     component: PublicComponent,
    //     children: [
    //         { path: '', component: HomeComponent, pathMatch: 'full' }
    //     ]

    // },
    // {
    //     path: '',
    //     component: PublicComponent,
    //     loadChildren: () => AuthModule
    // },
    {
        path: '',
        component: SecureComponent,
        canActivate: [AuthGuard],
        children: [
            { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
            { path: 'dashboard', component: DashboardComponent },
            { path: 'promises', loadChildren: './promises/promise.module#PromiseModule' },
            { path: 'profile', loadChildren: './profile/profile.module#ProfileModule' }
            // { path: 'account/:username', component: ProfileComponent }
        ]
    },

    { path: 'signin-oidc', component: SigninCbComponent },
    { path: 'redirect-silentrenew', component: RedirectSilentRenewComponent },
    { path: 'not-found', component: NotFoundComponent },
    { path: 'not-authorized', component: NotAuthorizedComponent },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [AuthGuard]
})
export class AppRoutingModule { }