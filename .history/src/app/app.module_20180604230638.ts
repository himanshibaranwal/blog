import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DonateAquaFundComponent } from './DonateAquaFund/DonateAquaFund.component';
import {NavigationBarComponent} from './NavigationBar/NavigationBar.component';
import {LoginComponent} from './login/login.component'
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
export const appRoutes: Routes=[
  { path:'DonateAquaFund',component: DonateAquaFundComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    DonateAquaFundComponent,
    NavigationBarComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }