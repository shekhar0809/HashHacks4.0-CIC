import { Component, OnInit } from '@angular/core';
import { ProfileLinkService } from '../profile-link.service';
import { Router } from '@angular/router';

export interface User {
  userId: string;
  name: string;
  weight: number;
  creditScore: number;
}

// fetch user data from firebase

const ELEMENT_DATA: User[] = [
  { userId: 'malika001', name: 'Malika', weight: 11.0079, creditScore: 100 },
  { userId: 'angela002', name: 'Angela', weight: 42.0026, creditScore: 500 },
  { userId: 'garima003', name: 'Garima', weight: 6.941, creditScore: 250 },
  { userId: 'stuti004', name: 'Stuti', weight: 9.0122, creditScore: 30 },
  { userId: 'seemant005', name: 'Seemant', weight: 10.811, creditScore: 4 },
  { userId: 'shivam006', name: 'Shivam', weight: 1.0107, creditScore: 970 },
  { userId: 'shekhar007', name: 'Shekhar', weight: 14.0067, creditScore: 100 },
  { userId: 'divyanshu008', name: 'Divyanshu', weight: 15.9994, creditScore: 70 },
  { userId: 'himanshu009', name: 'Himanshu', weight: 18.9984, creditScore: 460 },
  { userId: 'saksham010', name: 'Saksham', weight: 20.1797, creditScore: 10 },
];


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  displayedColumns: string[] = ['userId', 'name', 'weight', 'creditScore', 'link'];
  dataSource = ELEMENT_DATA;

  constructor(
    private getProfile: ProfileLinkService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  OpenLink(element: User) {
    this.getProfile.getUser(element);
    const tempWorker: User = element;
    const uid = tempWorker.userId;
    this.router.navigate(['workers/', uid]);
  }

}
