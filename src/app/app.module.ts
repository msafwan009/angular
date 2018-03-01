import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BankDataComponent } from './bank-data/bank-data.component';
import { BankServiceComponent } from './bank-service/bank-service.component';
import { HttpServiceService } from './http-service.service';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    BankDataComponent,
    BankServiceComponent
  ],
  imports: [
    BrowserModule,HttpClientModule
  ],
  providers: [HttpServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
