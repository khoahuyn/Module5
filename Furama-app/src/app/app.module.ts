import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ServiceComponent } from './service/service.component';
import { ListserviceComponent } from './listservice/listservice.component';
import { EditserviceComponent } from './editservice/editservice.component';
import { ListcustomerComponent } from './listcustomer/listcustomer.component';
import { EditcustomerComponent } from './editcustomer/editcustomer.component';
import { CustomerComponent } from './customer/customer.component';
import { ContractComponent } from './contract/contract.component';
import { ListcontractComponent } from './listcontract/listcontract.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServiceComponent,
    ListserviceComponent,
    EditserviceComponent,
    ListcustomerComponent,
    EditcustomerComponent,
    CustomerComponent,
    ContractComponent,
    ListcontractComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
