import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users = [{id: 0, name: 'tony', credits: 450}, {id: 1, name: 'sam', credits: 765}]

  constructor() { }

  getUsers() {
    return this.users;
  }

  getUser(id: number) {
    
  }
}
