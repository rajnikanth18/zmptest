import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdminComponent } from './admin/admin.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { CsrComponent } from './csr/csr.component';
import { AdvertisersComponent } from './advertisers/advertisers.component';
import { AffiliatesComponent } from './affiliates/affiliates.component';
import { ClientsComponent } from './clients/clients.component';

import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from  '@angular/material/input';

//import {MatNativeDateModule} from  '@angular/material/nativedate';
import {MatDatepickerModule} from  '@angular/material/datepicker';

import {MatCheckboxModule}  from  '@angular/material/checkbox';
import {MatRadioModule} from  '@angular/material/radio';
import {MatListModule} from  '@angular/material/list';
import {MatDialogModule} from  '@angular/material/dialog';
import {MatTableModule} from  '@angular/material/table';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatMenuModule} from '@angular/material/menu';
import {MatSelectModule} from '@angular/material/select';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AdminComponent,
    SidenavComponent,
    CsrComponent,
    AdvertisersComponent,
    AffiliatesComponent,
    ClientsComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatIconModule,
    MatCardModule,
    MatToolbarModule,
    MatMenuModule,
    MatSelectModule,
    MatSidenavModule,
    MatInputModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatFormFieldModule,
    //MatNativeDateModule,
    MatDatepickerModule,
    MatCheckboxModule,
    MatRadioModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatDialogModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
