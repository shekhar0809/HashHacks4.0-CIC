import { Component, OnInit } from '@angular/core';
import { ProfileLinkService } from '../profile-link.service';
import { Router } from '@angular/router';


export interface Worker {
  userId: string;
  name: string;
  weight: number;
  locality: number;
}

// fetch user data from firebase

const ELEMENT_DATA: Worker[] = [
  { userId: 'shamu001', name: 'Shamu', weight: 150.0079, locality: 110086 },
  { userId: 'ramu002', name: 'Ramu', weight: 41.0026, locality: 110086 },
  { userId: 'golu003', name: 'Golu', weight: 86.941, locality: 110006 },
  { userId: 'rajat004', name: 'Rajat', weight: 59.0122, locality: 110009 },
  { userId: 'pankaj005', name: 'Pankaj', weight: 10.811, locality: 110085 },
  { userId: 'shubham006', name: 'Shubham', weight: 121.0107, locality: 110007 },
  { userId: 'alok007', name: 'Alok', weight: 74.0067, locality: 110085 },
  { userId: 'shubhanshu008', name: 'Shubhanshu', weight: 15.9994, locality: 110011 },
  { userId: 'raju009', name: 'Raju', weight: 18.9984, locality: 110005 },
  { userId: 'gaurav010', name: 'Gaurav', weight: 100.1797, locality: 110005 },
];


@Component({
  selector: 'app-workers',
  templateUrl: './workers.component.html',
  styleUrls: ['./workers.component.css']
})
export class WorkersComponent implements OnInit {

  displayedColumns: string[] = ['userId', 'name', 'weight', 'locality' , 'link'];
  dataSource = ELEMENT_DATA;

  constructor(
    private getProfile: ProfileLinkService,
    private router: Router

  ) { }

  ngOnInit() {
  }

  OpenLink(element: Worker) {
    this.getProfile.getWorker(element);
    const tempWorker: Worker = element;
    const uid = tempWorker.userId;
    this.router.navigate( ['workers/', uid]);
  }
}
