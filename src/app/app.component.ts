import { Component } from '@angular/core';
import { UserService } from './service/user/user.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title: string = 'Bootcamp angular';
  courseStatus: boolean | string = '';
  users: string[] = [];
  constructor(public userService: UserService) {}

  toggleCourseStatus(value: boolean) {
    this.courseStatus = value;
    console.log(this.courseStatus);
  }
}
