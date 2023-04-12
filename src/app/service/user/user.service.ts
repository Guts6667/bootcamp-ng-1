import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  public users: User[] = [];

  constructor(private httpClient: HttpClient) {}

  public getUsers() {
    this.httpClient.get<User[]>('http://localhost:3000/users').subscribe((users: User[]) => {
      this.users = users;
    });
  }

  // public getUsersObs(): Observable<User[]> {
  //   if (!this.users.length) {
  //     return this.httpClient.get<User[]>('http://localhost:3000/users').pipe(
  //       map((users: User[]) => {
  //         this.users = users;
  //         return users;
  //       })
  //     );
  //   } else {
  //     return of(this.users);
  //   }
  // }
}
