import { Injectable } from "@angular/core";

import { Shoe } from "./shoe";
import { Line } from "../line/line";

@Injectable()
export class ShoeService {

    private lines = new Array<Line>();

    private shoes = new Array<Shoe>(
        {
            id: "1225-01",
            name: "1225-01",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris leo sapien, volutpat in aliquam ac, placerat vel libero",
            colors: 3,
            photos: [
                {file:"~/images/joaquina-1225-01-negro.JPG", name:"Negro"},
                {file:"~/images/joaquina-1225-01-rosa.JPG", name:"Rosa"},
                {file:"~/images/joaquina-1225-01-suela.JPG", name:"Suela"}
            ],
            line: "Joaquina"
        },
        {
            id: "1225-02",
            name: "1225-02",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris leo sapien, volutpat in aliquam ac, placerat vel libero",
            colors: 3,
            photos: [
                {file:"~/images/joaquina-1225-02-negro.JPG", name:"Negro"},
                {file:"~/images/joaquina-1225-02-rosa.JPG", name:"Rosa"},
                {file:"~/images/joaquina-1225-02-suela.JPG", name:"Suela"}
            ],
            line: "Joaquina"
        },
        {
            id: "430-01",
            name: "430-01",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris leo sapien, volutpat in aliquam ac, placerat vel libero",
            colors: 3,
            photos: [
                {file:"~/images/emma-430-01-oro.JPG", name:"Oro"},
                {file:"~/images/emma-430-01-negro.JPG", name:"Negro"},
                {file:"~/images/emma-430-01-celeste.JPG", name:"Celeste"}
            ],
            line: "Emma"
        },
        {
            id: "430-02",
            name: "430-02",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris leo sapien, volutpat in aliquam ac, placerat vel libero",
            colors: 3,
            photos: [
                {file:"~/images/emma-430-02-oro.JPG", name:"Oro"},
                {file:"~/images/emma-430-02-negro.JPG", name:"Negro"},
                {file:"~/images/emma-430-02-suela.JPG", name:"Suela"}
            ],
            line: "Emma"
        },
        {
            id: "430-03",
            name: "430-03",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris leo sapien, volutpat in aliquam ac, placerat vel libero",
            colors: 3,
            photos: [
                {file:"~/images/emma-430-03-blanco.JPG", name:"Blanco"},
                {file:"~/images/emma-430-03-negro.JPG", name:"Negro"},
                {file:"~/images/emma-430-03-vison.JPG", name:"Vison"}
            ],
            line: "Emma"
        }
    );
    
    getShoes(): Shoe[] {
        return this.shoes;
    }

    getShoe(id: string): Shoe {
        return this.shoes.filter(shoe => shoe.id === id)[0];
    }

    getShoesByLine(line: string): Shoe[] {
        return this.shoes.filter(shoe => shoe.line === line);
    }

    buildLines(){
        var joaquina : Line = new Line(this.getShoesByLine("Joaquina"), "Linea Joaquina");
        this.lines.push(joaquina);
        var emma : Line = new Line(this.getShoesByLine("Emma"), "Linea Emma");
        this.lines.push(emma);
        return this.lines;
    }

}
