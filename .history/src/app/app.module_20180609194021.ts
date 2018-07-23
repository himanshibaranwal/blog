import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DonateAquaFundComponent } from './DonateAquaFund/DonateAquaFund.component';
import { LoginComponent } from './login/login.component'
import { AppComponent } from './app.component';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    AppComponent,
    RouterModule,  
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
      }
   ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
