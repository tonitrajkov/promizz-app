import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { PromisesComponent, PromiseDetailComponent, PromiseService, PromiseAddModalComponent } from '.';

const routes: Routes = [
    { path: '', component: PromisesComponent },
    { path: 'promise/:promiseId', component: PromiseDetailComponent }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        SharedModule
    ],
    declarations: [
        PromisesComponent,
        PromiseDetailComponent,
        PromiseAddModalComponent
    ],
    providers: [
        PromiseService
    ],
    entryComponents: [
        PromiseAddModalComponent
    ]
})
export class PromiseModule { }
