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
import {ConfirmationService, MessageService} from 'primeng/api';
import { AngularFileUploaderComponent } from './CommonComponents/angular-file-uploader/angular-file-uploader.component';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { ConfirmDialogModule } from 'primeng/confirmdialog';



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AutoCompleteComponent,
    MultiSelectComponent,
    PopupComponent,
    PopupContent,
    AngularFileUploaderComponent
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
    ButtonModule,
    CommonModule,
    HttpClientModule,
    FontAwesomeModule,
    ConfirmDialogModule
  ],
  providers: [CountryService,DialogService,MessageService,ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule {}
