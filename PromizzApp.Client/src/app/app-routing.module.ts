import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { SecureComponent } from './_layouts/secure/secure.component';

import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
    {
        path: '',
        loadChildren: './public/public.module#PublicModule'
    },
    {
        path: 'demo',
        component: SecureComponent,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'dashboard', component: DashboardComponent },
            { path: 'promises', loadChildren: './promises/promise.module#PromiseModule' }
        ]
    },
    // otherwise redirect to home
    // { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule { }