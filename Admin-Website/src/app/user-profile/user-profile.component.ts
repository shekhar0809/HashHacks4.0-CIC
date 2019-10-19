import { Component, OnInit } from '@angular/core';
import { ProfileLinkService } from '../profile-link.service';
import { User } from '../users/users.component';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor(
    private getProfile: ProfileLinkService
) { }

  user: User = this.getProfile.user;

  ngOnInit() {
  }

}
