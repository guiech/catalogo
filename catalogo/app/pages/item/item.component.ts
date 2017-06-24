import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { Item } from "../../shared/item/item";
import { ItemService } from "../../shared/item/item.service";

@Component({
    selector: "cg-item-page",
    providers: [ItemService],
    moduleId: module.id,
    templateUrl: "./item.component.html",
})
export class ItemComponent implements OnInit {
    item: Item;

    constructor(
        private itemService: ItemService,
        private route: ActivatedRoute
    ) { }

    ngOnInit(): void {
        const id = this.route.snapshot.params["id"];
        this.item = this.itemService.getItem(id);
    }
}
