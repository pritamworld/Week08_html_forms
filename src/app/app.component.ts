import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import HomeComponent from "./home/home.component";
import { StudentComponent } from './student/student.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, StudentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Anuglar Example';
  name = "Pritesh Patel"

  // today: number = Date.now();
  today: Date = new Date();

  student = {
    name: 'Pritesh',
    age: 25
  }

  //Example to send data to child component
  studentData = {
    firstname: 'Pritesh',
    lastname: 'Patel',
    city: 'Ahmedabad',
    birtdate: new Date(1995, 10, 10),
    course: 'Angular Programming'
  }

  sayHello():void {
    alert('Hello');
  }

  myStyle = {
    color: 'red',
    fontStyle: 'italic',
    fontSize: '50px',
    backgroundColor: 'blue'
  }
}
