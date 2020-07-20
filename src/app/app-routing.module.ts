import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdvertisersComponent } from './advertisers/advertisers.component';
import { AffiliatesComponent } from './affiliates/affiliates.component';
import { CsrComponent } from './csr/csr.component';
import { ClientsComponent } from './clients/clients.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'advertisers', component: AdvertisersComponent },
  { path: 'affiliates', component: AffiliatesComponent },
  { path: 'csr', component: CsrComponent },
  { path: 'clients', component: ClientsComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
