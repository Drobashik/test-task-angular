import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { IUser, UserService } from '../shared/users.service';

@Component({
  selector: 'app-user-section',
  templateUrl: './user-section.component.html',
  styleUrls: ['./user-section.component.scss']
})
export class UserSectionComponent implements OnInit {

  constructor(private userService: UserService) { }

  users: IUser[] = []

  ngOnInit(): void {
    this.userService.getData().subscribe(data => {
      this.users = data.users
    })
  }

  getMoreUsers() {
    this.userService.count += 6;
    this.userService.getData().subscribe(data => {
      this.users = data.users
    })
  }

}
