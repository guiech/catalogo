import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { Page } from "ui/page";

import { Line } from "../../shared/line/line";
import { ShoeService } from "../../shared/shoes/shoes.service";

import { Device } from "../../shared/device";

@Component({
    selector: "cg-list-page",
    providers: [ShoeService],
    moduleId: module.id,
    templateUrl: "./list.component.html",
    styleUrls: ["./list.css", "./list-common.css"]
})
export class ListComponent implements OnInit {

    lines : Line[];

    constructor(private shoeService: ShoeService, private router: Router, private page: Page) { }

    ngOnInit(): void {
        this.lines = this.shoeService.buildLines();
    }

    goToShoe(id:number) : void {
        Device.height = this.page.getMeasuredHeight();
        Device.width = this.page.getMeasuredWidth();
        Device.actualHeight = this.page.getActualSize().height;
        Device.actualWidth = this.page.getActualSize().width;
        this.router.navigate(['/shoe', id]);

    }
}
