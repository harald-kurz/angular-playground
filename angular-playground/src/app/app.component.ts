import { Component, computed, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

const firstName = signal('Toni');
const firstNameUpper = computed(() => firstName().toUpperCase());

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'angular-playground';
  firstNameUpperCase = firstNameUpper;
}

firstName.set('RehHirschHaseWald');
