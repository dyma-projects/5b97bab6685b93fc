import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public users: BehaviorSubject<string[]> = new BehaviorSubject([]);

  constructor() { }

  addUser(user: string): void {
    const currentUsers: string[] = this.users.value;
    currentUsers.push(user);
    this.users.next(currentUsers);
  }
}
