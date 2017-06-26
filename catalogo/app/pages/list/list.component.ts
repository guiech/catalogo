import * as scrollViewModule from "tns-core-modules/ui/scroll-view";
import { Component, OnInit } from "@angular/core";

import { Shoe } from "../../shared/shoes/shoe";
import { Line } from "../../shared/line/line";
import { ShoeService } from "../../shared/shoes/shoes.service";

@Component({
    selector: "cg-list-page",
    providers: [ShoeService],
    moduleId: module.id,
    templateUrl: "./list.component.html",
    styleUrls: ["./list.css", "./list-common.css"]
})
export class ListComponent implements OnInit {

    lines : Line[];

    constructor(private shoeService: ShoeService) { }

    ngOnInit(): void {
        this.lines = this.shoeService.buildLines();
    }
}
