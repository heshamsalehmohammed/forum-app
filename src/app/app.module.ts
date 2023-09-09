import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {NavBarComponent} from './CommonComponents/nav-bar/nav-bar.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {CountryService} from './services/countryservice';
import {AutoCompleteComponent} from './CommonComponents/auto-complete/auto-complete.component';
import {WrapperComponent} from './CommonComponents/wrapper/wrapper.component';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AutoCompleteComponent,
    WrapperComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    AutoCompleteModule
  ],
  providers: [CountryService],
  bootstrap: [AppComponent]
})
export class AppModule {}
