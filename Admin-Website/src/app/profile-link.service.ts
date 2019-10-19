import { Injectable } from '@angular/core';
import { User } from './users/users.component';
import { Worker } from './workers/workers.component';

@Injectable({
  providedIn: 'root'
})
export class ProfileLinkService {

  worker: Worker;
  user: User;

  constructor() {

  }

  getUser(element: User) {
    this.user = element;
    return element;
  }

  getWorker(element: Worker) {
    this.worker = element;
    return element;
  }
}
