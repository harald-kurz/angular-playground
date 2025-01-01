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
  
  addUser(newName: string, newCredits: number ) {
      const newId = this.users[this.users.length -1].id + 1;
      console.log(newId);
      this.users.push({id: newId, name: newName, credits: newCredits});
      console.log(this.users);
  }
}
