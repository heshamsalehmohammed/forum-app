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
import { MultiSelectComponent } from './CommonComponents/multi-select/multi-select.component';
import { MultiSelectModule } from 'primeng/multiselect';
import { PopupComponent } from './CommonComponents/popup/popup.component';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import {PopupContent} from './CommonComponents/popup/popupContent';
import { DialogService } from 'primeng/dynamicdialog';
import {MessageService} from 'primeng/api';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AutoCompleteComponent,
    MultiSelectComponent,
    PopupComponent,
    PopupContent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    AutoCompleteModule,
    MultiSelectModule,
    DynamicDialogModule,
    ToastModule,
    ButtonModule
  ],
  providers: [CountryService,DialogService,MessageService],
  bootstrap: [AppComponent]
})
export class AppModule {}
