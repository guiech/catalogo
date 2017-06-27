import { Injectable } from "@angular/core";

import { Shoe } from "./shoe";
import { Line } from "../line/line";

@Injectable()
export class ShoeService {

    private lines = new Array<Line>();

    private shoes = new Array<Shoe>(
        {
            id: "zapato0001",
            name: "Este sabe",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris leo sapien, volutpat in aliquam ac, placerat vel libero",
            colors: 2,
            photos: new Array("~/images/zapato0001-c1.jpg","~/images/zapato0001-c1.jpg","~/images/zapato0002-c2.jpg","~/images/zapato0002-c2.jpg")
        },
        {
            id: "zapato0002",
            name: "Bota Dos",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris leo sapien, volutpat in aliquam ac, placerat vel libero",
            colors: 2,
            photos: new Array("~/images/zapato0002-c2.jpg","~/images/zapato0001-c1.jpg")
        },
        {
            id: "zapato0003",
            name: "Zapato Tres",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris leo sapien, volutpat in aliquam ac, placerat vel libero",
            colors: 2,
            photos: new Array("~/images/zapato0001-c1.jpg","~/images/zapato0002-c2.jpg")
        },
        {
            id: "zapato0004",
            name: "Zandalia Cuatro",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris leo sapien, volutpat in aliquam ac, placerat vel libero",
            colors: 2,
            photos: new Array("~/images/zapato0002-c2.jpg","~/images/zapato0001-c1.jpg")
        }
    );

    private shoes2 = new Array<Shoe>(
        {
            id: "zapato0001",
            name: "Este sabe",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris leo sapien, volutpat in aliquam ac, placerat vel libero",
            colors: 2,
            photos: new Array("~/images/zapato0001-c1.jpg","~/images/zapato0001-c1.jpg","~/images/zapato0002-c2.jpg")
        },
        {
            id: "zapato0002",
            name: "Bota Dos",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris leo sapien, volutpat in aliquam ac, placerat vel libero",
            colors: 2,
            photos: new Array("~/images/zapato0002-c2.jpg","~/images/zapato0001-c1.jpg")
        },
        {
            id: "zapato0003",
            name: "Zapato Tres",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris leo sapien, volutpat in aliquam ac, placerat vel libero",
            colors: 2,
            photos: new Array("~/images/zapato0001-c1.jpg","~/images/zapato0002-c2.jpg")
        },
        {
            id: "zapato0004",
            name: "Zandalia Cuatro",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris leo sapien, volutpat in aliquam ac, placerat vel libero",
            colors: 2,
            photos: new Array("~/images/zapato0002-c2.jpg","~/images/zapato0001-c1.jpg")
        }
    );
    
    getShoes(): Shoe[] {
        return this.shoes;
    }

    getShoe(id: string): Shoe {
        return this.shoes.filter(shoe => shoe.id === id)[0];
    }

    buildLines(){
        var line : Line = new Line(this.shoes, "Titulo 1");
        this.lines.push(line);
        var line2 : Line = new Line(this.shoes2, "Titulo 2");
        this.lines.push(line2);
        return this.lines;
    }

}
