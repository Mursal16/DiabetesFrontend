import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AppDfromComponent } from './app-dfrom/app-dfrom.component';
import { AppSuccessComponent } from './app-dfrom/app-success/app-success.component';
import { AppFailureComponent } from './app-dfrom/app-failure/app-failure.component';
import { RouterModule } from '@angular/router';
import { AppBackgroundComponent } from './app-background/app-background.component';
import {HttpClientModule} from '@angular/common/http'


@NgModule({
  declarations: [
    AppComponent,
    AppDfromComponent,
    AppSuccessComponent,
    AppFailureComponent,
    AppBackgroundComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
    {path:'',component:AppBackgroundComponent},
    {path:'form',component:AppDfromComponent},
    {path: 'form/app-success', component: AppSuccessComponent},
    {path: 'form/app-failure', component: AppFailureComponent},
    ]),
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
