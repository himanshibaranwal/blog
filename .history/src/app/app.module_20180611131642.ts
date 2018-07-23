import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DonateAquaFundComponent } from './DonateAquaFund/DonateAquaFund.component';
import { NavBarComponent } from './NavBar/NavBar.component';
import { LoginComponent } from './login/login.component'
import { ImpactStoriesComponent } from './ImpactStories/ImpactStories.component';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { JoinUsComponent } from './JoinUs/JoinUs.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent, 
    DonateAquaFundComponent,
    ImpactStoriesComponent,
    LoginComponent,
    JoinUsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'ImpactStories',
        component: ImpactStoriesComponent
      },
      {
        path:'DonateAquaFund',
        component: DonateAquaFundComponent
      },
      {
        path:'login',
        component: LoginComponent
      },
      {
        path: 'JoinUs',
        component: JoinUsComponent
      },
   ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
