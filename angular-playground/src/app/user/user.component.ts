import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { ReactiveFormsModule, Validators, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user',
  imports: [ReactiveFormsModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  newUserForm = new FormGroup({
    name: new FormControl('', Validators.required),
    credits: new FormControl(0, Validators.min(0))
  });
  users;

  constructor(private userService: UserService){
    this.users = this.userService.getUsers();
  }

  OnNewUserSave(){
    this.userService.addUser(this.newUserForm.value.name!, this.newUserForm.value.credits!);
  }
}
