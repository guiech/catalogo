import { Component, OnInit } from "@angular/core";

import { Item } from "../../shared/item/item";
import { ItemService } from "../../shared/item/item.service";

@Component({
    selector: "cg-list-page",
    providers: [ItemService],
    moduleId: module.id,
    templateUrl: "./list.component.html",
})
export class ListComponent implements OnInit {
    items: Item[];

    constructor(private itemService: ItemService) { }

    ngOnInit(): void {
        this.items = this.itemService.getItems();
    }
}
