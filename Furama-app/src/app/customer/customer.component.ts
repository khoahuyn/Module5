import {Component, OnInit} from '@angular/core';
import {Customer} from './customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customers: Customer[] = [
    {
      customerName: 'Nguyễn Thị Yến',
      customerBirthDay: '04/02/2002',
      customerCMND: '012345678901',
      customerNumber: '+84123456789',
      customerEmail: 'nguyenvana@example.com',
      customerType: 'Gold',
      customerAddress: '120 Ngô Quyền'
    },
    {
      customerName: 'Nguyễn Phan Anh',
      customerBirthDay: '01/02/2004',
      customerCMND: '012345678903',
      customerNumber: '+84123456715',
      customerEmail: 'nguyenvanb@example.com',
      customerType: 'Platinum',
      customerAddress: '120 Phan Thanh'
    },
    {
      customerName: 'Trần Thị Mỹ',
      customerBirthDay: '17/10/2003',
      customerCMND: '012345678904',
      customerNumber: '+84123456722',
      customerEmail: 'nguyenvanc@example.com',
      customerType: 'Silver',
      customerAddress: '120 Hoà Sơn'
    },
    {
      customerName: 'Phạm Thị Ngọc',
      customerBirthDay: '31/08/2003',
      customerCMND: '012345678905',
      customerNumber: '+84123456744',
      customerEmail: 'nguyenvand@example.com',
      customerType: 'Diamond',
      customerAddress: '120 Bạch Đằng'
    },

  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
