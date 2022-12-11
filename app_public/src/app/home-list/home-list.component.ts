import { Component, OnInit } from '@angular/core';
import { HairDSysDataService } from '../hair-dsys-data.service';

export class Barbers { 
  _id!: string;
  name!: string;
  address!: string;
  city!: string;
  distance!: number;
  rating!: number;
  price!: number[];
  available!: boolean;
  services!: string[];
  }
@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.component.html',
  styleUrls: ['./home-list.component.css'],
  providers: [HairDSysDataService]
})

export class HomeListComponent implements OnInit {
  constructor(private hairDSysDataService: HairDSysDataService) { }
  barbers: Barbers[] = [{
    _id: '1',
    name: 'John Smith',
    address: '123 Main St',
    city: 'San Francisco',
    distance: 100,
    rating: 4.5,
    price:[30,20],
    available: true,
    services: ['Haircut', 'Shave', 'Beard Trim']
  },{
    _id: '2',
    name: 'JLomax',
    address: '123 Main St',
    city: 'San Francisco',
    distance: 2000.3,
    rating: 4.5,
    price:[30,20],
    available: true,
    services: ['Haircut', 'Shave', 'Beard Trim']
  },
  {
    _id: '3',
    name: 'Marta Meastro',
    address: '123 Main St',
    city: 'Madrid',
    distance: 200.3222,
    rating: 4.5,
    price:[30,20],
    available: true,
    services: ['Haircut', 'Shave', 'Beard Trim']
  },];
  
    
  ngOnInit() { }
  }
  
