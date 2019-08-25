import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        loadChildren: './public/public.module#PublicModule'
    },
    {
        path:'demo',
        loadChildren: './demo/demo.module#DemoModule'
    },
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled', useHash: true })],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule { }
