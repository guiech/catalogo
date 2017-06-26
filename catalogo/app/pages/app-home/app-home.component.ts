import { Component} from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-home',
	moduleId: module.id,
	templateUrl: './app-home.component.html',
	styleUrls: ['./app-home.css']
})

export class AppHomeComponent {

	private logoPath : string = "~/images/logo.png";

	constructor(private router: Router) {}

	private btnClick= function () {
		console.log("click");
		this.router.navigate(["/list"]);
	};
}