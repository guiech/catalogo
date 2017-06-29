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
            description: "nn",
            colors: 3,
            photos: [
                {file:"~/images/joaquina-1225-01.JPG", name:""},
                {file:"~/images/joaquina-1225-01-negro.JPG", name:"Negro"},
                {file:"~/images/joaquina-1225-01-rosa.JPG", name:"Rosa"},
                {file:"~/images/joaquina-1225-01-suela.JPG", name:"Suela"}
            ],
            thumb: "~/thumbs/joaquina-1225-01-negro.JPG",
            line: "Joaquina"
        },
        {
            id: "1225-02",
            name: "1225-02",
            description: "",
            colors: 3,
            photos: [
                {file:"~/images/joaquina-1225-02.JPG", name:""},
                {file:"~/images/joaquina-1225-02-negro.JPG", name:"Negro"},
                {file:"~/images/joaquina-1225-02-rosa.JPG", name:"Rosa"},
                {file:"~/images/joaquina-1225-02-suela.JPG", name:"Suela"}
            ],
            thumb: "~/thumbs/joaquina-1225-02-rosa.JPG",
            line: "Joaquina"
        },
        {
            id: "430-01",
            name: "430-01",
            description: "",
            colors: 3,
            photos: [
                {file:"~/images/emma-430-01-oro.JPG", name:"Oro"},
                {file:"~/images/emma-430-01-negro.JPG", name:"Negro"},
                {file:"~/images/emma-430-01-celeste.JPG", name:"Celeste"}
            ],
            thumb: "~/thumbs/emma-430-01-oro.JPG",
            line: "Emma"
        },
        {
            id: "430-02",
            name: "430-02",
            description: "",
            colors: 3,
            photos: [
                {file:"~/images/emma-430-02.JPG", name:""},
                {file:"~/images/emma-430-02-oro.JPG", name:"Oro"},
                {file:"~/images/emma-430-02-negro.JPG", name:"Negro"},
                {file:"~/images/emma-430-02-suela.JPG", name:"Suela"}
            ],
            thumb: "~/thumbs/emma-430-02-oro.JPG",
            line: "Emma"
        },
        {
            id: "430-03",
            name: "430-03",
            description: "",
            colors: 3,
            photos: [
                {file:"~/images/emma-430-03.JPG", name:""},
                {file:"~/images/emma-430-03-blanco.JPG", name:"Blanco"},
                {file:"~/images/emma-430-03-negro.JPG", name:"Negro"},
                {file:"~/images/emma-430-03-vison.JPG", name:"Vison"}
            ],
            thumb: "~/thumbs/emma-430-03-blanco.JPG",
            line: "Emma"
        },
        {
            id: "409-10",
            name: "409-10",
            description: "",
            colors: 3,
            photos: [
                {file:"~/images/maria-409-10.JPG", name:""},
                {file:"~/images/maria-409-10-verde.JPG", name:"Verde"},
                {file:"~/images/maria-409-10-rosa.JPG", name:"Rosa"},
                {file:"~/images/maria-409-10-negro.JPG", name:"Negro"}
            ],
            thumb: "~/thumbs/maria-409-10-verde.JPG",
            line: "Maria"
        },
        {
            id: "409-11",
            name: "409-11",
            description: "",
            colors: 3,
            photos: [
                {file:"~/images/maria-409-11.JPG", name:""},
                {file:"~/images/maria-409-11-verde.JPG", name:"Verde"},
                {file:"~/images/maria-409-11-suela.JPG", name:"Suela"},
                {file:"~/images/maria-409-11-negro.JPG", name:"Negro"}
            ],
            thumb: "~/thumbs/maria-409-11-verde.JPG",
            line: "Maria"
        },
        {
            id: "409-12",
            name: "409-12",
            description: "",
            colors: 3,
            photos: [
                {file:"~/images/maria-409-12.JPG", name:""},
                {file:"~/images/maria-409-12-vison.JPG", name:"Vison"},
                {file:"~/images/maria-409-12-suela.JPG", name:"Suela"},
                {file:"~/images/maria-409-12-negro.JPG", name:"Negro"}
            ],
            thumb: "~/thumbs/maria-409-12-vison.JPG",
            line: "Maria"
        },
        {
            id: "4016-01",
            name: "4016-01",
            description: "",
            colors: 3,
            photos: [
                {file:"~/images/emilia-4016-01-blanco.JPG", name:"Blanco"},
                {file:"~/images/emilia-4016-01-negro.JPG", name:"Negro"},
                {file:"~/images/emilia-4016-01-rosa.JPG", name:"Rosa"}
            ],
            thumb: "~/thumbs/emilia-4016-01-blanco.JPG",
            line: "Emilia"
        },
        {
            id: "4016-02",
            name: "4016-02",
            description: "",
            colors: 3,
            photos: [
                {file:"~/images/emilia-4016-02-celeste.JPG", name:"Celeste"},
                {file:"~/images/emilia-4016-02-negro.JPG", name:"Negro"},
                {file:"~/images/emilia-4016-02-suela.JPG", name:"Suela"}
            ],
            thumb: "~/thumbs/emilia-4016-02-celeste.JPG",
            line: "Emilia"
        },
        {
            id: "4016-03",
            name: "4016-03",
            description: "",
            colors: 3,
            photos: [
                {file:"~/images/emilia-4016-03-rojo.JPG", name:"Rojo"},
                {file:"~/images/emilia-4016-03-vison.JPG", name:"Vison"},
                {file:"~/images/emilia-4016-03-negro.JPG", name:"Negro"}
            ],
            thumb: "~/thumbs/emilia-4016-03-rojo.JPG",
            line: "Emilia"
        },
        {
            id: "4016-04",
            name: "4016-04",
            description: "",
            colors: 3,
            photos: [
                {file:"~/images/emilia-4016-04-suela.JPG", name:"Suela"},
                {file:"~/images/emilia-4016-04-verde.JPG", name:"Verde"},
                {file:"~/images/emilia-4016-04-negro.JPG", name:"Negro"}
            ],
            thumb: "~/thumbs/emilia-4016-04-suela.JPG",
            line: "Emilia"
        },
        {
            id: "6001-01",
            name: "6001-01",
            description: "",
            colors: 2,
            photos: [
                {file:"~/images/julia-6001-01.JPG", name:""},
                {file:"~/images/julia-6001-01-negro.JPG", name:"Negro"},
                {file:"~/images/julia-6001-01-vison.JPG", name:"Vison"}
            ],
            thumb: "~/thumbs/julia-6001-01-negro.JPG",
            line: "Julia"
        },
        {
            id: "6001-02",
            name: "6001-02",
            description: "",
            colors: 3,
            photos: [
                {file:"~/images/julia-6001-02.JPG", name:""},
                {file:"~/images/julia-6001-02-azul.JPG", name:"Azul"},
                {file:"~/images/julia-6001-02-negro.JPG", name:"Negro"},
                {file:"~/images/julia-6001-02-suela.JPG", name:"Suela"}
            ],
            thumb: "~/thumbs/julia-6001-02-azul.JPG",
            line: "Julia"
        },
        {
            id: "6001-03",
            name: "6001-03",
            description: "",
            colors: 3,
            photos: [
                {file:"~/images/julia-6001-03.JPG", name:""},
                {file:"~/images/julia-6001-03-marron.JPG", name:"Marron"},
                {file:"~/images/julia-6001-03-negro.JPG", name:"Negro"},
                {file:"~/images/julia-6001-03-verde.JPG", name:"Verde"}
            ],
            thumb: "~/thumbs/julia-6001-03-marron.JPG",
            line: "Julia"
        },
        {
            id: "3700-01",
            name: "3700-01",
            description: "",
            colors: 3,
            photos: [
                {file:"~/images/anto-3700-01.JPG", name:""},
                {file:"~/images/anto-3700-01-negro.JPG", name:"Negro"},
                {file:"~/images/anto-3700-01-rosa.JPG", name:"Rosa"},
                {file:"~/images/anto-3700-01-verde.JPG", name:"Verde"}
            ],
            thumb: "~/thumbs/anto-3700-01-negro.JPG",
            line: "Anto"
        },
        {
            id: "3700-02",
            name: "3700-02",
            description: "",
            colors: 3,
            photos: [
                {file:"~/images/anto-3700-02.JPG", name:""},
                {file:"~/images/anto-3700-02-rosa.JPG", name:"Rosa"},
                {file:"~/images/anto-3700-02-negro.JPG", name:"Negro"},
                {file:"~/images/anto-3700-02-suela.JPG", name:"Suela"}
            ],
            thumb: "~/thumbs/anto-3700-02-rosa.JPG",
            line: "Anto"
        },
        {
            id: "3700-03",
            name: "3700-03",
            description: "",
            colors: 3,
            photos: [
                {file:"~/images/anto-3700-03.JPG", name:""},
                {file:"~/images/anto-3700-03-blanco.JPG", name:"Blanco"},
                {file:"~/images/anto-3700-03-rosa.JPG", name:"Rosa"},
                {file:"~/images/anto-3700-03-negro.JPG", name:"Negro"}
            ],
            thumb: "~/thumbs/anto-3700-03-blanco.JPG",
            line: "Anto"
        },
        {
            id: "408-01",
            name: "408-01",
            description: "",
            colors: 3,
            photos: [
                {file:"~/images/cecilia-408-01-negro.JPG", name:"Negro"},
                {file:"~/images/cecilia-408-01-suela.JPG", name:"Suela"},
                {file:"~/images/cecilia-408-01-verde.JPG", name:"Verde"}
            ],
            thumb: "~/thumbs/cecilia-408-01-negro.JPG",
            line: "Cecilia"
        },
        {
            id: "408-02",
            name: "408-02",
            description: "",
            colors: 3,
            photos: [
                {file:"~/images/cecilia-408-02-blanco.JPG", name:"Blanco"},
                {file:"~/images/cecilia-408-02-negro.JPG", name:"Negro"},
                {file:"~/images/cecilia-408-02-suela.JPG", name:"Suela"}
            ],
            thumb: "~/thumbs/cecilia-408-02-blanco.JPG",
            line: "Cecilia"
        },
        {
            id: "408-03",
            name: "408-03",
            description: "",
            colors: 3,
            photos: [
                {file:"~/images/cecilia-408-03-celeste.JPG", name:"Celeste"},
                {file:"~/images/cecilia-408-03-negro.JPG", name:"Negro"},
                {file:"~/images/cecilia-408-03-oro.JPG", name:"Oro"}
            ],
            thumb: "~/thumbs/cecilia-408-03-celeste.JPG",
            line: "Cecilia"
        },
        {
            id: "404-01",
            name: "404-01",
            description: "",
            colors: 3,
            photos: [
                {file:"~/images/pilar-404-01-azul.JPG", name:"Azul"},
                {file:"~/images/pilar-404-01-negro.JPG", name:"Negro"},
                {file:"~/images/pilar-404-01-vison.JPG", name:"Vison"}
            ],
            thumb: "~/thumbs/pilar-404-01-azul.JPG",
            line: "Pilar"
        },
        {
            id: "404-02",
            name: "404-02",
            description: "",
            colors: 2,
            photos: [
                {file:"~/images/pilar-404-02-verde.JPG", name:"Verde"},
                {file:"~/images/pilar-404-02-suela.JPG", name:"Suela"},
                {file:"~/images/pilar-404-02-negro.JPG", name:"Negro"},
            ],
            thumb: "~/thumbs/pilar-404-02-verde.JPG",
            line: "Pilar"
        },
        {
            id: "404-03",
            name: "404-03",
            description: "",
            colors: 3,
            photos: [
                {file:"~/images/pilar-404-03.JPG", name:""},
                {file:"~/images/pilar-404-03-negro.JPG", name:"Negro"},
                {file:"~/images/pilar-404-03-suela.JPG", name:"Suela"},
                {file:"~/images/pilar-404-03-blanco.JPG", name:"Blanco"}
            ],
            thumb: "~/thumbs/pilar-404-03-negro.JPG",
            line: "Pilar"
        },
        {
            id: "700-01",
            name: "700-01",
            description: "",
            colors: 3,
            photos: [
                {file:"~/images/zoe-700-01.JPG", name:""},
                {file:"~/images/zoe-700-01-negro.JPG", name:"Negro"},
                {file:"~/images/zoe-700-01-oro.JPG", name:"Oro"},
                {file:"~/images/zoe-700-01-suela.JPG", name:"Suela"}
            ],
            thumb: "~/thumbs/zoe-700-01-negro.JPG",
            line: "Zoe"
        },
        {
            id: "700-02",
            name: "700-02",
            description: "",
            colors: 3,
            photos: [
                {file:"~/images/zoe-700-02.JPG", name:""},
                {file:"~/images/zoe-700-02-rosa.JPG", name:"Rosa"},
                {file:"~/images/zoe-700-02-negro.JPG", name:"Negro"},
                {file:"~/images/zoe-700-02-suela.JPG", name:"Suela"}
            ],
            thumb: "~/thumbs/zoe-700-02-rosa.JPG",
            line: "Zoe"
        },
        {
            id: "700-03",
            name: "700-03",
            description: "",
            colors: 3,
            photos: [
                {file:"~/images/zoe-700-03.JPG", name:""},
                {file:"~/images/zoe-700-03-negro.JPG", name:"Negro"},
                {file:"~/images/zoe-700-03-rosa.JPG", name:"Rosa"},
                {file:"~/images/zoe-700-03-vison.JPG", name:"Vison"}
            ],
            thumb: "~/thumbs/zoe-700-03-negro.JPG",
            line: "Zoe"
        },
        {
            id: "400-01",
            name: "400-01",
            description: "",
            colors: 3,
            photos: [
                {file:"~/images/antonia-400-01-negro.JPG", name:"Negro"},
                {file:"~/images/antonia-400-01-blanco.JPG", name:"Blanco"},
                {file:"~/images/antonia-400-01-suela.JPG", name:"Suela"}
            ],
            thumb: "~/thumbs/antonia-400-01-negro.JPG",
            line: "Antonia"
        },
        {
            id: "400-02",
            name: "400-02",
            description: "",
            colors: 3,
            photos: [
                {file:"~/images/antonia-400-02.JPG", name:""},
                {file:"~/images/antonia-400-02-rosa.JPG", name:"Rosa"},
                {file:"~/images/antonia-400-02-negro.JPG", name:"Negro"},
                {file:"~/images/antonia-400-02-oro.JPG", name:"Oro"}
            ],
            thumb: "~/thumbs/antonia-400-02-rosa.JPG",
            line: "Antonia"
        },
        {
            id: "400-03",
            name: "400-03",
            description: "",
            colors: 3,
            photos: [
                {file:"~/images/antonia-400-03-lila.JPG", name:"Lila"},
                {file:"~/images/antonia-400-03-negro.JPG", name:"Negro"},
                {file:"~/images/antonia-400-03-suela.JPG", name:"Suela"}
            ],
            thumb: "~/thumbs/antonia-400-03-lila.JPG",
            line: "Antonia"
        },
        {
            id: "400-04",
            name: "400-04",
            description: "",
            colors: 3,
            photos: [
                {file:"~/images/antonia-400-04-blanco.JPG", name:"Blanco"},
                {file:"~/images/antonia-400-04-negro.JPG", name:"Negro"},
                {file:"~/images/antonia-400-04-suela.JPG", name:"Suela"}
            ],
            thumb: "~/thumbs/antonia-400-04-blanco.JPG",
            line: "Antonia"
        },
        {
            id: "400-05",
            name: "400-05",
            description: "",
            colors: 1,
            photos: [
                {file:"~/images/antonia-400-05.JPG", name:""},
                {file:"~/images/antonia-400-05-rosa-perla.JPG", name:"Rosa Perla"},
            ],
            thumb: "~/images/antonia-400-05-rosa-perla.JPG",
            line: "Antonia"
        },
        {
            id: "1224-01",
            name: "1224-01",
            description: "",
            colors: 3,
            photos: [
                {file:"~/images/anita-1224-01.JPG", name:""},
                {file:"~/images/anita-1224-01-blanco.JPG", name:"Blanco"},
                {file:"~/images/anita-1224-01-negro.JPG", name:"Negro"},
                {file:"~/images/anita-1224-01-rosa.JPG", name:"Rosa"}
            ],
            thumb: "~/thumbs/anita-1224-01-blanco.JPG",
            line: "Anita"
        },
        {
            id: "1224-02",
            name: "1224-02",
            description: "",
            colors: 3,
            photos: [
                {file:"~/images/anita-1224-02.JPG", name:""},
                {file:"~/images/anita-1224-02-rosa.JPG", name:"Rosa"},
                {file:"~/images/anita-1224-02-blanco.JPG", name:"Blanco"},
                {file:"~/images/anita-1224-02-negro.JPG", name:"Negro"}
            ],
            thumb: "~/thumbs/anita-1224-02-rosa.JPG",
            line: "Anita"
        },
        {
            id: "500-01",
            name: "500-01",
            description: "",
            colors: 3,
            photos: [
                {file:"~/images/lola-500-01.JPG", name:""},
                {file:"~/images/lola-500-01-coral.JPG", name:"CH.Coral"},
                {file:"~/images/lola-500-01-negro.JPG", name:"CH.Negro"},
                {file:"~/images/lola-500-01-rosa.JPG", name:"CH.Rosa"}
            ],
            thumb: "~/thumbs/lola-500-01-coral.JPG",
            line: "Lola"
        },
        {
            id: "500-02",
            name: "500-02",
            description: "",
            colors: 3,
            photos: [
                {file:"~/images/lola-500-02.JPG", name:""},
                {file:"~/images/lola-500-02-blanco.JPG", name:"Blanco"},
                {file:"~/images/lola-500-02-negro.JPG", name:"Negro"},
                {file:"~/images/lola-500-02-celeste.JPG", name:"Celeste"}
            ],
            thumb: "~/thumbs/lola-500-02-blanco.JPG",
            line: "Lola"
        },
        {
            id: "500-03",
            name: "500-03",
            description: "",
            colors: 3,
            photos: [
                {file:"~/images/lola-500-03.JPG", name:""},
                {file:"~/images/lola-500-03-suela.JPG", name:"Suela"},
                {file:"~/images/lola-500-03-negro.JPG", name:"Negro"},
                {file:"~/images/lola-500-03-vison.JPG", name:"Vison"}
            ],
            thumb: "~/thumbs/lola-500-03-suela.JPG",
            line: "Lola"
        },
        {
            id: "1229-01",
            name: "1229-01",
            description: "",
            colors: 3,
            photos: [
                {file:"~/images/ingrid-1229-01-blanco.JPG", name:"CH.Blanco"},
                {file:"~/images/ingrid-1229-01-negro.JPG", name:"CH.Negro"},
                {file:"~/images/ingrid-1229-01-rosa.JPG", name:"CH.Rosa"}
            ],
            thumb: "~/thumbs/ingrid-1229-01-blanco.JPG",
            line: "Ingrid"
        },
        {
            id: "1229-02",
            name: "1229-02",
            description: "",
            colors: 3,
            photos: [
                {file:"~/images/ingrid-1229-02-suela.JPG", name:"Suela"},
                {file:"~/images/ingrid-1229-02-negro.JPG", name:"Negro"},
                {file:"~/images/ingrid-1229-02-vison.JPG", name:"Vison"}
            ],
            thumb: "~/thumbs/ingrid-1229-02-suela.JPG",
            line: "Ingrid"
        },
        {
            id: "1229-03",
            name: "1229-03",
            description: "",
            colors: 3,
            photos: [
                {file:"~/images/ingrid-1229-03.JPG", name:""},
                {file:"~/images/ingrid-1229-03-azul.JPG", name:"Azul"},
                {file:"~/images/ingrid-1229-03-negro.JPG", name:"Negro"},
                {file:"~/images/ingrid-1229-03-verde.JPG", name:"Verde"}
            ],
            thumb: "~/thumbs/ingrid-1229-03-azul.JPG",
            line: "Ingrid"
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
        this.lines.push(new Line(this.getShoesByLine("Joaquina"), "Linea Joaquina"));
        this.lines.push(new Line(this.getShoesByLine("Emma"), "Linea Emma"));
        this.lines.push(new Line(this.getShoesByLine("Maria"), "Linea Maria"));
        this.lines.push(new Line(this.getShoesByLine("Emilia"), "Linea Emilia"));
        this.lines.push(new Line(this.getShoesByLine("Julia"), "Linea Julia"));
        this.lines.push(new Line(this.getShoesByLine("Anto"), "Linea Anto"));
        this.lines.push(new Line(this.getShoesByLine("Cecilia"), "Linea Cecilia"));
        this.lines.push(new Line(this.getShoesByLine("Pilar"), "Linea Pilar"));
        this.lines.push(new Line(this.getShoesByLine("Zoe"), "Linea Zoe"));
        this.lines.push(new Line(this.getShoesByLine("Antonia"), "Linea Antonia"));
        this.lines.push(new Line(this.getShoesByLine("Anita"), "Linea Anita"));
        this.lines.push(new Line(this.getShoesByLine("Lola"), "Linea Lola"));
        this.lines.push(new Line(this.getShoesByLine("Ingrid"), "Linea Ingrid"));
        return this.lines;
    }

}
