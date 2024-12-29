import { Component, computed, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ExampleService } from './services/example.service';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'angular-playground';
  firstName = signal('Toni');
  firstNameUpper = computed(() => this.firstName().toUpperCase());
  isAdmin = false;

  changeName() {
    this.firstName.set('RehHirschHaseWald');
  }

  changeUserRole() {
    this.isAdmin = !this.isAdmin;
  }

  private exampleService = inject(ExampleService);
  result = this.exampleService.add(2,3);
}
