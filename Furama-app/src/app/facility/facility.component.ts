import {Component, OnInit} from '@angular/core';
import {Facility} from './facility';

@Component({
  selector: 'app-facility',
  templateUrl: './facility.component.html',
  styleUrls: ['./facility.component.css']
})
export class FacilityComponent implements OnInit {

  facilitys: Facility[] = [
    {
      serviceName: 'Double Room',
      serviceArea: 2000,
      serviceFloor: 4,
      serviceCapacity: 4,
      serviceCost: 2000,
      serviceRentType: 'Month',
      serviceStatus: 'TYPE 1'
    },
    {
      serviceName: 'Villa',
      serviceArea: 4000,
      serviceFloor: 1,
      serviceCapacity: 8,
      serviceCost: 12000,
      serviceRentType: 'Year',
      serviceStatus: 'VIP'
    },
    {
      serviceName: 'Single Room',
      serviceArea: 1000,
      serviceFloor: 5,
      serviceCapacity: 2,
      serviceCost: 500,
      serviceRentType: 'Day',
      serviceStatus: 'TYPE 2'
    },
    {
      serviceName: 'Presidential House',
      serviceArea: 5000,
      serviceFloor: 2,
      serviceCapacity: 1,
      serviceCost: 3500,
      serviceRentType: 'Hour',
      serviceStatus: 'LUXURY'
    },


  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
