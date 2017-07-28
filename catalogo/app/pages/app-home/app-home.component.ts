import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Page } from "ui/page";

@Component({
	selector: 'app-home',
	moduleId: module.id,
	templateUrl: './app-home.component.html',
	styleUrls: ['./app-home.css']
})

export class AppHomeComponent implements OnInit{

	private logoPath : string = "~/images/logo.png";

	constructor(private router: Router, private page: Page) {}

	ngOnInit() {
		this.page.actionBarHidden = true;
	}

	btnClick() {
		this.page.actionBarHidden = true;
		this.router.navigate(["/list"]);
	};
}