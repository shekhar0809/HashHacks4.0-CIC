import { Component, OnInit } from '@angular/core';
import { ProfileLinkService } from '../profile-link.service';
import { Worker } from '../workers/workers.component';

@Component({
  selector: 'app-worker-profile',
  templateUrl: './worker-profile.component.html',
  styleUrls: ['./worker-profile.component.css']
})
export class WorkerProfileComponent implements OnInit {

  constructor(
    private getProfile: ProfileLinkService
  ) { }

  worker: Worker = this.getProfile.worker;


  ngOnInit() {
  }

}
