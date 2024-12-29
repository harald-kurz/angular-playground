import { Component, computed, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';



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

  changeName() {
    this.firstName.set('RehHirschHaseWald');
  }
}
