import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WorkersComponent } from './workers/workers.component';
import { UsersComponent } from './users/users.component';
import { StatsComponent } from './stats/stats.component';
import { WorkerProfileComponent } from './worker-profile/worker-profile.component';
import { UserProfileComponent } from './user-profile/user-profile.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'workers',
    component: WorkersComponent
  },
  {
    path: 'workers/:id',
    component: WorkerProfileComponent
  },
  {
    path: 'users',
    component: UsersComponent
  },
  {
    path: 'users/:id',
    component: UserProfileComponent
  },
  {
    path: 'stats',
    component: StatsComponent
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
