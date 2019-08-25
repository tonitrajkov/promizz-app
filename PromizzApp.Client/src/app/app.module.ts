import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { JsonpModule } from '@angular/http';

// Modules
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';

// Components
import { PromiseAppComponent } from './promise-app.component';
import { PromiseAddModalComponent, PromiseService } from './promises';

@NgModule({
  declarations: [
    PromiseAppComponent,
    PromiseAddModalComponent
  ],
  imports: [
    SharedModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    HttpClientJsonpModule,
    FormsModule,
    JsonpModule,
    ReactiveFormsModule,
    CoreModule,
    AppRoutingModule
  ],
  providers: [
    PromiseService
  ],
  entryComponents: [
    PromiseAddModalComponent
  ],
  bootstrap: [PromiseAppComponent]
})
export class AppModule { }
