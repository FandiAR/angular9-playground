import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: Object;

  constructor(private _user: UserService) { }

  ngOnInit(): void {
    this._user.getUsers().subscribe(data => {
      this.users = data;
    });
  }

}
