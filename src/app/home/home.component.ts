import { Component } from '@angular/core';

@Component({
  selector: 'home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export default class HomeComponent {
  title: string;
  constructor() {
    this.title = 'Anuglar Home Page';
  }
}
