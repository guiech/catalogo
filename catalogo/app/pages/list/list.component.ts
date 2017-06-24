import * as scrollViewModule from "tns-core-modules/ui/scroll-view";
import { Component, OnInit } from "@angular/core";

import { Item } from "../../shared/item/item";
import { ItemService } from "../../shared/item/item.service";

@Component({
    selector: "cg-list-page",
    providers: [ItemService],
    moduleId: module.id,
    templateUrl: "./list.component.html",
    styleUrls: ["./list.css", "./list-common.css"]
})
export class ListComponent implements OnInit {
    items: Item[];

    constructor(private itemService: ItemService) { }

    ngOnInit(): void {
        this.items = this.itemService.getItems();
        console.log(this.items[0].photos[0]);
    }
}
