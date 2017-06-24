import { Injectable } from "@angular/core";

import { Item } from "./item";

@Injectable()
export class ItemService {
    private items = new Array<Item>(
        {
            id: "zapato0001",
            name: "Ter Stegen",
            description: "Goalkeeper",
            colors: 2,
            photos: new Array("res://","res://")
        }
    );

    getItems(): Item[] {
        return this.items;
    }

    getItem(id: string): Item {
        return this.items.filter(item => item.id === id)[0];
    }
}
