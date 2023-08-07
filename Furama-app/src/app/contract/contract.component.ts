import {Component, OnInit} from '@angular/core';
import {Contract} from './contract';

@Component({
  selector: 'app-z',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.css']
})
export class ContractComponent implements OnInit {

  contracts: Contract[] = [
    {
      customerName: 'Nguyễn Thị Yến',
      serviceName: 'Room',
      contractDayCreate: '04/02/2002',
      contractEndDay: '04/12/2002',
      contractDeposit: 2.000,
      contractTotal_Cost: 4.000
    },
    {
      customerName: 'Nguyễn Phan Anh',
      serviceName: 'Villa',
      contractDayCreate: '01/02/2004',
      contractEndDay: '01/12/2004',
      contractDeposit: 4.000,
      contractTotal_Cost: 16.000
    },
    {
      customerName: 'Trần Thị Mỹ',
      serviceName: 'House',
      contractDayCreate: '17/10/2003',
      contractEndDay: '17/10/2004',
      contractDeposit: 6.000,
      contractTotal_Cost: 24.000
    },
    {
      customerName: 'Phạm Thị Ngọc',
      serviceName: 'Villa',
      contractDayCreate: '31/08/2003',
      contractEndDay: '31/08/2004',
      contractDeposit: 8.000,
      contractTotal_Cost: 32.000
    },


  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
