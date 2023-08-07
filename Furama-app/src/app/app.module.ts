import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {AddserviceComponent} from './addservice/addservice.component';
import {ListserviceComponent} from './listservice/listservice.component';
import {EditserviceComponent} from './editservice/editservice.component';
import {ListcustomerComponent} from './listcustomer/listcustomer.component';
import {EditcustomerComponent} from './editcustomer/editcustomer.component';
import {AddcustomerComponent} from './addcustomer/addcustomer.component';
import {AddcontractComponent} from './addcontract/addcontract.component';
import {ListcontractComponent} from './listcontract/listcontract.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {FacilityComponent} from './facility/facility.component';
import {CustomerComponent} from './customer/customer.component';
import {ContractComponent} from './contract/contract.component';




const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'add-service', component: AddserviceComponent},
  {path: 'add-contract', component: AddcontractComponent},
  {path: 'add-customer', component: AddcustomerComponent},
  {path: 'facility', component: FacilityComponent},
  {path: 'customer', component: CustomerComponent},
  {path: 'contract', component: ContractComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddserviceComponent,
    ListserviceComponent,
    EditserviceComponent,
    ListcustomerComponent,
    EditcustomerComponent,
    AddcustomerComponent,
    AddcontractComponent,
    ListcontractComponent,
    FacilityComponent,
    CustomerComponent,
    ContractComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
