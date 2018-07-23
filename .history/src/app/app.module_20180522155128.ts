import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {DonateAquaFundComponent} from './DonateAquaFund/DonateAquaFund.component';
import {NavigationBarComponent} from './NavigationBar/NavigationBar.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    DonateAquaFundComponent,
    NavigationComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
