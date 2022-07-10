import { Component, OnInit } from '@angular/core';
import { IUser } from '../shared/users';
import { UserService } from '../shared/users.service';

@Component({
  selector: 'app-user-section',
  templateUrl: './user-section.component.html',
  styleUrls: ['./user-section.component.scss']
})
export class UserSectionComponent implements OnInit {

  constructor(private userService: UserService) { }

  imageUrl: string = './assets/img.png'

  users: IUser[] = [];

  ngOnInit(): void {
    this.userService.getData(this.userService.page, this.userService.count).subscribe(data => {
      this.users = data.users
    })
  }

  getMoreUsers() {
    console.log(this.users);
    this.userService.getMorePages().subscribe(data => {
      data.users.forEach(e => {
        this.users.push(e)
      })
    },
    error => console.log(error.error.message)
    )
  }

}
