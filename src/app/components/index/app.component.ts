
import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'] 
})


export class AppComponent {
	title = 'Student Management By PK';

	// Add few students for initial listing
	studentsList = [
	{
		id : 1,
		first_name : "Pramod",
		last_name : "Sah",
		email : "pramod@gmail.com",
		phone : 9503733178,
		department : "Science"
	},
	{
		id : 2,
		first_name : "Afroj",
		last_name : "Alam",
		email : "arf@gmail.com",
		phone : 8574889658,
		department : "Commerce"
	},
	{
		id : 3,
		first_name : "Tina",
		last_name : "Dabi",
		email : "iastina@gmail.com",
		phone : 7485889658,
		department : "Science"
	},
	{
		id : 4,
		first_name : "Amiya",
		last_name : "Bhatta",
		email : "amiya@gmail.com",
		phone : 9685589748,
		department : "Arts"
	},
	{
		id : 5,
		first_name : "Om",
		last_name : "Kashyap",
		email : "om@gmail.com",
		phone : 8595856547,
		department : "Engineering"
	}
	];

	constructor() {
		// Save students to localStorage
		localStorage.setItem('students', JSON.stringify(this.studentsList));
	}
}
