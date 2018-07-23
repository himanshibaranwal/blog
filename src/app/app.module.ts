import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AboutMeComponent } from './AboutMe/AboutMe';
import { NavBarComponent } from './NavBar/NavBar.component';
import { ContactComponent } from './Contact/Contact.component'
import { FooterComponent } from './Footer/Footer.component';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { MyWorkComponent } from './MyWork/MyWork.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent, 
    AboutMeComponent,
    FooterComponent,
    ContactComponent,
    MyWorkComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'MyWork',
        component: MyWorkComponent
      },
      {
        path:'AboutMe',
        component: AboutMeComponent
      },
      {
        path:'Contact',
        component: ContactComponent
      },
   ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
