import { Injectable } from "@angular/core";

import { Item } from "./item";

@Injectable()
export class ItemService {
    private items = new Array<Item>(
        {
            id: "zapato0001",
            name: "Taco Alto Uno",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris leo sapien, volutpat in aliquam ac, placerat vel libero",
            colors: 2,
            photos: new Array("~/images/zapato0001-c1.jpg","~/images/zapato0002-c2.jpg")
        },
        {
            id: "zapato0002",
            name: "Bota Dos",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris leo sapien, volutpat in aliquam ac, placerat vel libero",
            colors: 2,
            photos: new Array("~/images/zapato0002-c2.jpg","~/images/zapato0001-c1.jpg")
        },
        {
            id: "zapato0001",
            name: "Taco Alto Uno",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris leo sapien, volutpat in aliquam ac, placerat vel libero",
            colors: 2,
            photos: new Array("~/images/zapato0001-c1.jpg","~/images/zapato0002-c2.jpg")
        },
        {
            id: "zapato0002",
            name: "Bota Dos",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris leo sapien, volutpat in aliquam ac, placerat vel libero",
            colors: 2,
            photos: new Array("~/images/zapato0002-c2.jpg","~/images/zapato0001-c1.jpg")
        },
        {
            id: "zapato0001",
            name: "Taco Alto Uno",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris leo sapien, volutpat in aliquam ac, placerat vel libero",
            colors: 2,
            photos: new Array("~/images/zapato0001-c1.jpg","~/images/zapato0002-c2.jpg")
        },
        {
            id: "zapato0002",
            name: "Bota Dos",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris leo sapien, volutpat in aliquam ac, placerat vel libero",
            colors: 2,
            photos: new Array("~/images/zapato0002-c2.jpg","~/images/zapato0001-c1.jpg")
        },
        {
            id: "zapato0001",
            name: "Taco Alto Uno",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris leo sapien, volutpat in aliquam ac, placerat vel libero",
            colors: 2,
            photos: new Array("~/images/zapato0001-c1.jpg","~/images/zapato0002-c2.jpg")
        },
        {
            id: "zapato0002",
            name: "Bota Dos",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris leo sapien, volutpat in aliquam ac, placerat vel libero",
            colors: 2,
            photos: new Array("~/images/zapato0002-c2.jpg","~/images/zapato0001-c1.jpg")
        }
    );

    getItems(): Item[] {
        return this.items;
    }

    getItem(id: string): Item {
        return this.items.filter(item => item.id === id)[0];
    }
}
