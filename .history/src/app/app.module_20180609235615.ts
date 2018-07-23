import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DonateAquaFundComponent } from './DonateAquaFund/DonateAquaFund.component';
import { NavBarComponent } from './NavBar/NavBar.component';
import { LoginComponent } from './login/login.component'
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent, 
    DonateAquaFundComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path:'DonateAquaFund',
        component: DonateAquaFundComponent
      },
      {
        path:'login',
        component: LoginComponent
      }
   ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
