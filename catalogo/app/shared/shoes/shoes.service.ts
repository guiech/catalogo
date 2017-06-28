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
                {file:"~/images/emma-430-03-vizon.JPG", name:"Vizon"}
            ],
            line: "Emma"
        },
        {
            id: "409-10",
            name: "409-10",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris leo sapien, volutpat in aliquam ac, placerat vel libero",
            colors: 3,
            photos: [
                {file:"~/images/maria-409-10-verde.JPG", name:"Verde"},
                {file:"~/images/maria-409-10-rosa.JPG", name:"Rosa"},
                {file:"~/images/maria-409-10-negro.JPG", name:"Negro"}
            ],
            line: "Maria"
        },
        {
            id: "409-11",
            name: "409-11",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris leo sapien, volutpat in aliquam ac, placerat vel libero",
            colors: 3,
            photos: [
                {file:"~/images/maria-409-11-verde.JPG", name:"Verde"},
                {file:"~/images/maria-409-11-suela.JPG", name:"Suela"},
                {file:"~/images/maria-409-11-negro.JPG", name:"Negro"}
            ],
            line: "Maria"
        },
        {
            id: "409-12",
            name: "409-12",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris leo sapien, volutpat in aliquam ac, placerat vel libero",
            colors: 3,
            photos: [
                {file:"~/images/maria-409-12-vizon.JPG", name:"Vizon"},
                {file:"~/images/maria-409-12-suela.JPG", name:"Suela"},
                {file:"~/images/maria-409-12-negro.JPG", name:"Negro"}
            ],
            line: "Maria"
        },
        {
            id: "4016-01",
            name: "4016-01",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris leo sapien, volutpat in aliquam ac, placerat vel libero",
            colors: 3,
            photos: [
                {file:"~/images/emilia-4016-01-blanco.JPG", name:"Blanco"},
                {file:"~/images/emilia-4016-01-negro.JPG", name:"Negro"},
                {file:"~/images/emilia-4016-01-rosa.JPG", name:"Rosa"}
            ],
            line: "Emilia"
        },
        {
            id: "4016-02",
            name: "4016-02",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris leo sapien, volutpat in aliquam ac, placerat vel libero",
            colors: 3,
            photos: [
                {file:"~/images/emilia-4016-02-celeste.JPG", name:"Celeste"},
                {file:"~/images/emilia-4016-02-negro.JPG", name:"Negro"},
                {file:"~/images/emilia-4016-02-suela.JPG", name:"Suela"}
            ],
            line: "Emilia"
        },
        {
            id: "4016-03",
            name: "4016-03",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris leo sapien, volutpat in aliquam ac, placerat vel libero",
            colors: 3,
            photos: [
                {file:"~/images/emilia-4016-03-rojo.JPG", name:"Rojo"},
                {file:"~/images/emilia-4016-03-vizon.JPG", name:"Vizon"},
                {file:"~/images/emilia-4016-03-negro.JPG", name:"Negro"}
            ],
            line: "Emilia"
        },
        {
            id: "4016-04",
            name: "4016-04",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris leo sapien, volutpat in aliquam ac, placerat vel libero",
            colors: 3,
            photos: [
                {file:"~/images/emilia-4016-04-suela.JPG", name:"Suela"},
                {file:"~/images/emilia-4016-04-verde.JPG", name:"Verde"},
                {file:"~/images/emilia-4016-04-negro.JPG", name:"Negro"}
            ],
            line: "Emilia"
        },
        {
            id: "6001-01",
            name: "6001-01",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris leo sapien, volutpat in aliquam ac, placerat vel libero",
            colors: 2,
            photos: [
                {file:"~/images/julia-6001-01-negro.JPG", name:"Negro"},
                {file:"~/images/julia-6001-01-vison.JPG", name:"Vison"}
            ],
            line: "Julia"
        },
        {
            id: "6001-02",
            name: "6001-02",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris leo sapien, volutpat in aliquam ac, placerat vel libero",
            colors: 3,
            photos: [
                {file:"~/images/julia-6001-02-azul.JPG", name:"Azul"},
                {file:"~/images/julia-6001-02-negro.JPG", name:"Negro"},
                {file:"~/images/julia-6001-02-suela.JPG", name:"Suela"}
            ],
            line: "Julia"
        },
        {
            id: "6001-03",
            name: "6001-03",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris leo sapien, volutpat in aliquam ac, placerat vel libero",
            colors: 3,
            photos: [
                {file:"~/images/julia-6001-03-marron.JPG", name:"Marron"},
                {file:"~/images/julia-6001-03-negro.JPG", name:"Negro"},
                {file:"~/images/julia-6001-03-verde.JPG", name:"Verde"}
            ],
            line: "Julia"
        },
        {
            id: "3700-01",
            name: "3700-01",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris leo sapien, volutpat in aliquam ac, placerat vel libero",
            colors: 3,
            photos: [
                {file:"~/images/anto-3700-01-negro.JPG", name:"Negro"},
                {file:"~/images/anto-3700-01-rosa.JPG", name:"Rosa"},
                {file:"~/images/anto-3700-01-verde.JPG", name:"Verde"}
            ],
            line: "Anto"
        },
        {
            id: "3700-02",
            name: "3700-02",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris leo sapien, volutpat in aliquam ac, placerat vel libero",
            colors: 3,
            photos: [
                {file:"~/images/anto-3700-02-rosa.JPG", name:"Rosa"},
                {file:"~/images/anto-3700-02-negro.JPG", name:"Negro"},
                {file:"~/images/anto-3700-02-suela.JPG", name:"Suela"}
            ],
            line: "Anto"
        },
        {
            id: "3700-03",
            name: "3700-03",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris leo sapien, volutpat in aliquam ac, placerat vel libero",
            colors: 3,
            photos: [
                {file:"~/images/anto-3700-03-blanco.JPG", name:"Blanco"},
                {file:"~/images/anto-3700-03-rosa.JPG", name:"Rosa"},
                {file:"~/images/anto-3700-03-negro.JPG", name:"Negro"}
            ],
            line: "Anto"
        },
        {
            id: "408-01",
            name: "408-01",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris leo sapien, volutpat in aliquam ac, placerat vel libero",
            colors: 3,
            photos: [
                {file:"~/images/cecilia-408-01-negro.JPG", name:"Negro"},
                {file:"~/images/cecilia-408-01-suela.JPG", name:"Suela"},
                {file:"~/images/cecilia-408-01-verde.JPG", name:"Verde"}
            ],
            line: "Cecilia"
        },
        {
            id: "408-02",
            name: "408-02",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris leo sapien, volutpat in aliquam ac, placerat vel libero",
            colors: 3,
            photos: [
                {file:"~/images/cecilia-408-02-blanco.JPG", name:"Blanco"},
                {file:"~/images/cecilia-408-02-negro.JPG", name:"Negro"},
                {file:"~/images/cecilia-408-02-suela.JPG", name:"Suela"}
            ],
            line: "Cecilia"
        },
        {
            id: "408-03",
            name: "408-03",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris leo sapien, volutpat in aliquam ac, placerat vel libero",
            colors: 3,
            photos: [
                {file:"~/images/cecilia-408-03-celeste.JPG", name:"Celeste"},
                {file:"~/images/cecilia-408-03-negro.JPG", name:"Negro"},
                {file:"~/images/cecilia-408-03-oro.JPG", name:"Oro"}
            ],
            line: "Cecilia"
        },
        {
            id: "404-01",
            name: "404-01",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris leo sapien, volutpat in aliquam ac, placerat vel libero",
            colors: 3,
            photos: [
                {file:"~/images/pilar-404-01-azul.JPG", name:"Azul"},
                {file:"~/images/pilar-404-01-negro.JPG", name:"Negro"},
                {file:"~/images/pilar-404-01-vizon.JPG", name:"Vizon"}
            ],
            line: "Pilar"
        },
        {
            id: "404-02",
            name: "404-02",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris leo sapien, volutpat in aliquam ac, placerat vel libero",
            colors: 2,
            photos: [
                {file:"~/images/pilar-404-02-verde.JPG", name:"Verde"},
                {file:"~/images/pilar-404-02-suela.JPG", name:"Suela"},
                {file:"~/images/pilar-404-02-negro.JPG", name:"Negro"},
            ],
            line: "Pilar"
        },
        {
            id: "404-03",
            name: "404-03",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris leo sapien, volutpat in aliquam ac, placerat vel libero",
            colors: 3,
            photos: [
                {file:"~/images/pilar-404-03-negro.JPG", name:"Negro"},
                {file:"~/images/pilar-404-03-suela.JPG", name:"Suela"},
                {file:"~/images/pilar-404-03-blanco.JPG", name:"Blanco"}
            ],
            line: "Pilar"
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
        var maria : Line = new Line(this.getShoesByLine("Maria"), "Linea Maria");
        this.lines.push(maria);
        var emilia : Line = new Line(this.getShoesByLine("Emilia"), "Linea Emilia");
        this.lines.push(emilia);
        var julia : Line = new Line(this.getShoesByLine("Julia"), "Linea Julia");
        this.lines.push(julia);
        var anto : Line = new Line(this.getShoesByLine("Anto"), "Linea Anto");
        this.lines.push(anto);
        var cecilia : Line = new Line(this.getShoesByLine("Cecilia"), "Linea Cecilia");
        this.lines.push(cecilia);
        var pilar : Line = new Line(this.getShoesByLine("Pilar"), "Linea Pilar");
        this.lines.push(pilar);
        return this.lines;
    }

}
