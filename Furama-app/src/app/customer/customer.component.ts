import { Component, OnInit } from '@angular/core';
import {Customer} from "./customer";

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customers:Customer[]=[
    {customerName:"Nguyễn Thị Yến",customerBirthDay:"04/02/2002",customerCMND:"27211235411",customerNumber:"09005006",customerEmail:"nguyenvana@example.com",customerType:"Gold",customerAddress:"120 Ngô Quyền"},
    {customerName:"Nguyễn Phan Anh",customerBirthDay:"01/02/2004",customerCMND:"27211235113",customerNumber:"09005008",customerEmail:"nguyenvanb@example.com",customerType:"Platinum",customerAddress:"120 Phan Thanh"},
    {customerName:"Trần Thị Mỹ",customerBirthDay:"17/10/2003",customerCMND:"27211235414",customerNumber:"09005009",customerEmail:"nguyenvanc@example.com",customerType:"Silver",customerAddress:"120 Hoà Sơn"},
    {customerName:"Phạm Thị Ngọc",customerBirthDay:"31/08/2003",customerCMND:"27211235415",customerNumber:"09005001",customerEmail:"nguyenvand@example.com",customerType:"Diamond",customerAddress:"120 Bạch Đằng"},

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
