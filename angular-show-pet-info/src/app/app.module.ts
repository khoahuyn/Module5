import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {PetComponent} from './pet/pet.component';
import {FormsModule} from '@angular/forms';
import {NameCardComponent} from './name-card/name-card.component';
import {ProgressBarComponent} from './progress-bar/progress-bar.component';
import {CountdownTimerComponent} from './countdown-timer/countdown-timer.component';
import {ReactiveFormsModule} from '@angular/forms';
import {RegisterFormComponent} from './register-form/register-form.component';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    PetComponent,
    NameCardComponent,
    ProgressBarComponent,
    CountdownTimerComponent,
    RegisterFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
